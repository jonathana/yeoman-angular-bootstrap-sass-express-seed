/**
 * Module dependencies.
 */

var http = require('http')
  , spa_app = require('./server');

var server = http.createServer(spa_app);

server.listen(3000, spa_app.settings.env != 'development' ? '127.0.0.1' : '0.0.0.0', function(){
  console.log("Express server listening on port %d in %s mode", server.address().port, spa_app.settings.env);
});
