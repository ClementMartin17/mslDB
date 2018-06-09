var Astromon = require('../../models/astromon.js');

function AstromonController() {
  this.fns = {
    get_astromons: this.get_astromons,
    get_astromon: this.get_astromon
  }
}

AstromonController.prototype.get_astromons = function(req, res) {
    Astromon.find().sort({astromon_id: 1}).exec(function(err, astromons) {
      if (err) {
        res.send(err);
      }
      res.json(astromons);
    });
}

AstromonController.prototype.get_astromon = function(req, res) {
    Astromon.find({astromon_id: req.params.astromon_id, element: req.params.element}, function(err, astromon) {
      if (err)
        res.send(err);
      res.json(astromon);
    });
}

module.exports = AstromonController;
