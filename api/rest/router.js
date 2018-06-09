var express = require('express');
var routes = require('./routes.js');
var Controller = require('./controllers/controller.js');
var controller = new Controller();
var router = express.Router();

for (var i = 0; i < routes.length; i++) {
  var route = routes[i];
  router.route(route.endpoint)[route.type](callback(route));
}

function callback(route) {
  return (req, res) => {
    controller.call(route, req, res);
  };
}

module.exports = router;
