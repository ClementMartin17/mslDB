var express = require('express');
var hostname = 'localhost';
var port = 3000;
var mongoose = require('mongoose');
var Astromon = require('./models/astromon.js');
var options = {
  keepAlive: 300000,
  connectTimeoutMS: 30000
};
var urlmongo = "mongodb://localhost:27017/msl";

mongoose.connect(urlmongo, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connexion error'));
db.once('open', function() {
  console.log("DB Connexion OK");
});

var app = express();
var bodyParser = require("body-parser");
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


var myRouter = express.Router();
myRouter.route('/')
  .all(function(req, res) {
    res.json({
      message: "Welcome to MSL Api",
      methode: req.method
    });
  });

myRouter.route('/astromons')
  .get(function(req, res) {
    Astromon.find(function(err, astromons) {
      if (err) {
        res.send(err);
      }
      res.json(astromons);
    });
  });

myRouter.route('/astromons/:astromon_id')
  .get(function(req, res) {
    Astromon.find({astromon_id: req.params.astromon_id}, function(err, astromon) {
      if (err)
        res.send(err);
      res.json(astromon);
    });
  });

app.use(myRouter);

app.listen(port, hostname, function() {
  console.log("Api open on http://" + hostname + ":" + port);
});
