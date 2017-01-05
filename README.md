# andredieb.com

## Development

All source code lives under [src](src/). This is a [yarn](https://yarnpkg.com)
project that builds the website into docs.

For local development I use `python -m SimpleHTTPServer 8000` and point
my browser to [localhost:8000/docs](http://localhost:8000/docs).


## Deployment

Git push to master :). This repo is configured for deploying `docs/` and using
a custom domain. If you clone it, remember to also change the [CNAME](CNAME) file.

