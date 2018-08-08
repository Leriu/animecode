const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meetpointSchema = new Schema({
    userID: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    description: String,
    location: { type: { type: String }, coordinates: [Number] },
    direcction: String
  },{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});
  meetpointSchema.index({ location: '2dsphere' });

const Meetpoint = mongoose.model('Meetpoint', meetpointSchema);

module.exports = Meetpoint;