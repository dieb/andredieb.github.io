# andredieb.com

[![Build Status](https://travis-ci.org/dieb/website.svg?branch=master)](https://travis-ci.org/dieb/website)


## Installation

Install the development dependencies:

```bash
$ yarn
```

## Development

All source code lives under [app](app/). This is a [yarn](https://yarnpkg.com)
project that builds the website into docs.

Build automatically on changes:

```bash
$ yarn run build-development-live
```

Website is live on [localhost:8080/webpack-dev-server](http://localhost:8000/webpack-dev-server) and will auto-refresh upon changes.


## Deployment

Stop the automatic local build and then execute

```bash
$ yarn run build-minimized
```

Commit the changes to `docs/` and git push to master :). This repo is
configured for deploying `docs/` and using a custom domain. If you clone it,
remember to also change the [CNAME](CNAME) file.

