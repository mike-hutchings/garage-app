const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
  }
);

module.exports = mongoose.model('Vehicle', VehicleSchema);