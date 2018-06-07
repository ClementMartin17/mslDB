var mongoose = require('mongoose');

var astromonSchema = mongoose.Schema({
  astromon_id: {
    type: 'String'
  },
  grade: {
    type: 'Number'
  },
  name: {
    type: [
      'String'
    ]
  },
  element: {
    type: 'String'
  },
  hp: {
    type: 'Number'
  },
  atk: {
    type: 'Number'
  },
  def: {
    type: 'Number'
  },
  rec: {
    type: 'Number'
  },
  critdmg: {
    type: 'Number'
  },
  critrate: {
    type: 'Number'
  },
  resi: {
    type: 'Number'
  },
  variant: {
    name: {
      type: 'String'
    },
    values: {
      type: [
        'Mixed'
      ]
    },
    text: {
      en: {
        type: 'String'
      }
    }
  },
  normal: {
    name: {
      type: 'String'
    },
    power: {
      value: {
        type: 'Mixed'
      },
      skillbook: {
        type: 'Mixed'
      }
    },
    passive: {
      name: {
        type: 'String'
      },
      values: {
        type: [
          'Mixed'
        ]
      },
      text: {
        en: {
          type: 'String'
        }
      }
    }
  },
  active: {
    name: {
      type: 'String'
    },
    power: {
      value: {
        type: 'Number'
      },
      skillbook: {
        type: 'Number'
      }
    },
    passive: {
      name: {
        type: 'String'
      },
      values: {
        type: [
          'Mixed'
        ]
      },
      text: {
        en: {
          type: 'String'
        }
      }
    },
    activeaoe: {
      type: 'Boolean'
    }
  }
});

module.exports = mongoose.model('Astromon', astromonSchema);
