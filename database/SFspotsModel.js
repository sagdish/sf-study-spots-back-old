const mongoose = require('mongoose');

const definition = {
  name: {
    type: String,
    required: true,
  },
  position: {
    lat: Number,
    lng: Number,
  },
  rating: {
    type: Number
  },
  photos: [{
    ref: String
  }],
};

const options = {
  timestamps: true,
};

// Fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
mongoose.set('useCreateIndex', true);

const sfSpotsSchema = new mongoose.Schema(definition, options);
const sfSpotsModel = mongoose.model('Spot', sfSpotsSchema);

module.exports = sfSpotsModel;