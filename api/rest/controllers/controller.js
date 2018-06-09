var RootController = require('./root_controller.js');
var AstromonController = require('./astromon_controller.js');

function Controller() {
  this.controllers = {
    root_controller: new RootController(),
    astromon_controller: new AstromonController()
  }
}

Controller.prototype.call = function(route, req, res) {
  this.controllers[route.controller].fns[route.action](req, res);
}

module.exports = Controller;
