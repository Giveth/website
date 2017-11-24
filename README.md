# Giveth website
The Giveth website is using Jekyll, Netlify CMS, and Bootstrap 4.

## Run your own installation

1 - Star the repo and fork it

2 - Clone your repo

3 - Install Jekyll:

Jekyll requires Ruby, this specific build also requires some additional packages (these may change as well).

Please refer to the official Jekyll Documentation for installing Jekyll:

[GNU/Linux, Unix, or macOS](https://jekyllrb.com/docs/installation/)

[Windows](https://jekyllrb.com/docs/windows/)

3 - Run ```bundle install``` to install additional dependencies

4 - Run ```jekyll serve``` to initiate a local build and run a local webserver.

5 - If you run into problems because your version of Jekyll is newer then ours, consider running ```bundle exec jekyll serve```

*Congratulations!* You can now edit the source files and immediately see the changes in your browser (should be [http://localhost:4000/](http://localhost:4000/)).


### Tested routine for Mac OS X

* need to have [Jekyll](https://jekyllrb.com/) installed:
```gem install jekyll bundler```

* clone the repo

* because we are using some additional goodies, need to install them:
```bundle install```

* on my machine it was complaining about incompatible version of Ruby, need to install [RVM](https://rvm.io/rvm/install):
```
curl -sSL https://get.rvm.io | bash
rvm install 2.4.2
rvn use 2.4.2
```

* on my machine it was failing, apparently need to install Xcode command line tools:
```
xcode-select --install
```

* now you are ready and set up:
```
jekyll serve
```

YMMV - your mileage may vary - potentially it will just work,

## Technologies used
* Created from ```jekyll new```
* added Netlify CMS in /admin/
* added Bootstrap 4 via CDN

## Contribution
The master branch is locked for direct pushes and needs a reviewed pull request. It should only be used for releases and hotfixes.

Please develop new content and features on the *development* branch. The changes are being built on push by Netlify and is reachable via:

[https://staging.giveth.io/](https://staging.giveth.io/)
