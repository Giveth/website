    var width = 960;
        height = 500;

    var centroid = d3.geo.path()
        .projection(function(d) { return d; })
        .centroid;

    var projection = d3.geo.orthographic()
        .scale (200)
        .clipAngle(90);

    var path = d3.geo.path()
        .projection(projection);

    var graticule = d3.geo.graticule()
        .extent([[-180, -90], [180 - 0.1, 90 - 0.1]]);

    var svg = d3.select("#world-svg-container").append("svg")
        .attr("width", width)
        .attr("height", height);

    var line = svg.append("path")
        .datum(graticule)
        .attr("class", "graticule")
        .attr("d", path);

    svg.append("circle")
        .attr("class", "graticule-outline")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", projection.scale());

    var title = svg.append("text")
        .attr("x", width / 2)
        .attr("y", height * 3 / 5);

    d3.json("https://gist.githubusercontent.com/creativepsyco/4187660/raw/6b678e72402d45811e10ebb4e238542ef4f4de51/readme-world-110m.json", function(error, world) {

        var countries = topojson.object(world, world.objects.countries).geometries,
            selectCountries = ["Austria", "Belgium", "Brazil", "Czech Rep.", "Ireland", "Netherlands", "Spain", "Switzerland", "United States"],
            i = -1;

        countries.sort(function(a, b){
            var keyA = a.id,
                keyB = b.id;
            // Compare the 2 dates
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });

        var country = svg.selectAll(".country")
            .data(countries)
            .enter().insert("path", ".graticule")
            .attr("class", "country")
            .attr("d", path);

        countries = countries.filter(function (c) {
            return selectCountries.indexOf(c.id) >= 0;
        });

        step();

        function step() {

            if (++i >= countries.length) i = 0;

            title.text(countries[i].id);

            country.transition()
                .style("fill", function(d, k) {
                    return selectCountries.indexOf(country[0][k].__data__.id) === i ? "#76318f" : "#b8b8b8";
                });

            d3.transition()
                .duration(1250)
                .tween("rotate", function() {
                    var point = centroid(countries[i]),
                        rotate = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
                    return function(t) {
                        projection.rotate(rotate(t));
                        country.attr("d", path);
                        line.attr("d", path);
                    };
                })
                .transition()
                .each("end", step);
        }
    });

    // Making the globe responsive, it's not that straightoward, "hacky" approach with magic numbers and CSS string concatenation
    $(window).resize(function() {
        var containerWidth = $("#world-svg-container").width();
        var scale = containerWidth / 480;
        $("#world-svg-container").css({ "transform" : "scale(" + scale + ")" });
    }).trigger("resize"); // kicking off the resize handler on the initial load

