function RootController() {
  this.fns = {
    welcome: this.welcome
  }
}

RootController.prototype.welcome = function(req, res) {
  res.json({
    message: "Welcome to MSL Api",
    methode: req.method
  });
}

module.exports = RootController;
