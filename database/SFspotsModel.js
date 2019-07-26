const mongoose = require('mongoose');

const definition = {
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
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
  favorite: {
    type: Boolean,
    default: false,
  }
};

const options = {
  timestamps: true,
};

// Fix DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
mongoose.set('useCreateIndex', true);

const sfSpotsSchema = new mongoose.Schema(definition, options);
const sfSpotsModel = mongoose.model('Spot', sfSpotsSchema);

module.exports = sfSpotsModel;