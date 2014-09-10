var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');

var server = module.exports.server = exports.server = express();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function (req, res) {
  res.render('./public/index.html');
});

server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), function() {
  console.log('Express server listening on port # ' + server.get('port'));
});