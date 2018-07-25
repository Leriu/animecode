const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetpointSchema = new Schema({
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] }
  });
  meetpointSchema.index({ location: '2dsphere' });

const Meetpoint = mongoose.model('Meetpoint', meetpointSchema);

module.exports = Meetpoint;