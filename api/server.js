
/**
 * Module dependencies.
 */

var express = require('express')
  , request = require('request')
  , conf = require('./conf');

var winston = require('winston');
var args = process.argv.slice(2);

var app = module.exports = express();

// Configuration

app.enable('trust_proxy');
app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// YES, I GET THAT THIS IS GLOBAL.  ON PURPOSE.
logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({level: calculateLogLevel(args, app.settings.env)})
  ]
});
logger.setLevels(winston.config.syslog.levels);

function calculateLogLevel(cmdLineArgs, appEnvSettings)
{
  var logLevel;
  if ( cmdLineArgs.length > 0 ) { logLevel = cmdLineArgs[0]; }
  else { logLevel = appEnvSettings == 'production' ? 'notice' : 'info'; }
  return logLevel;
}

// Routes

app.get('/api/ping', function SamplePing(req, res){
 res.json(200, {'message': 'Hello, world!'});
})
