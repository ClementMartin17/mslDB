var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require('cors');

var config = require('./config.js');
var router = require('./rest/router.js');

mongoose.connect(config.db.urlmongo, {
  keepAlive: config.db.keepAlive,
  connectTimeoutMS: config.db.connectTimeoutMS
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connexion error'));
db.once('open', function() {
  console.log("DB Connexion OK");
});

var app = express();

app.use(cors({origin: config.api.allowOrigin}));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(router);

app.listen(config.api.port, config.api.hostname, function() {
  console.log("Api open on http://" + config.api.hostname + ":" + config.api.port);
});
