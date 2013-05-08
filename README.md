# Base Yeoman AngularJS+Bootstrap/SASS SPA app powered by Express node.js app

Released under a MIT-style license.

## Goals

The goal of this project was to provide a working yeoman-based SPA (single page app) that includes the following things:

* RequireJS
* AngularJS, working properly with RequireJS
* Working twitter bootstrap (as of 5/8/2013 getting bootstrap+angularJS to work together in yeoman is not working out-of-the-box) sitting alongside AngularJS
* SASS
* AngularUI
* An embedded node.js server to provide the underlying server-side api for the SPA to call, that functions from within the `grunt server` command and is available on the same host/port as the SPA code in that model

## Prerequisites

* You will need to have node and npm installed.  You will need it for the next item, yeoman, anyway
* You must have yeoman (including grunt and bower) installed.  This project assumes 1.0rc4 or later of yeoman

## Getting Started

* Clone the git repository: `git clone https://github.com/jonathana/yeoman-angular-bootstrap-sass-express-seed.git _your_local_directory_name_`
* `cd _your_local_directory_name_; npm install && bower install` to get the npm modules and bower components in use by the seed in place
* `(cd api && npm install)` to get the npm modules that the api express app needs
* Edit app/index.html to replace all the #UPPER_CASE_SNAKE_NAMES to sane values for _your_ project
* Provide your own app/favicon.ico and app/images/ico/apple-touch-icon-{57,72,114,144}-precomposed.png favorite icons for the site
* The express app being hosted out lives in ./api at the top level of the repo.  server.js is the file you will want to
build upon to expose the routes the SPA supports.  By default, the express app mounts at /api in the Gruntfile for `grunt server`.  The app.js file that ships just includes server.js and creates the nodejs http server exposing it in case you want to use it standalone
* That should be it.  Run `grunt server` and the app should come up and run at http://localhost:9000/ or whatever IP address you ran it on.  Note that the main page view (app/views/main.html) is pulling its data from the express app mounted at /api.  Review api/server.js to see what is served out and app/scripts/app.js to see where the Angular controller calls the express app
* Once you see that the page loads up "Hello, world!", you can start editing the main view at app/views/Main.html along with app/scripts/app.js to have the app do what you want along with adding in whatever other views and services you want

## Some notes

* The magic of loading the express app at /api is in the Gruntfile where we do a `require('./api/server');`
* The Gruntfile has been configured to serve out on **all interfaces**.  I did this because typically I run the server on a vagrant box but edit the files in a shared out folder on the host machine and view them on the host machine browser
* If you find bugs/want to contribute, please create an issue on this project
