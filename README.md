# Giveth website
The Giveth website is using Netlify CMS, Bootstrap 4 and is built with Jekyll

## Getting started

### Mac OS X

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
