const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
    password: String,
    email: String,
    userimage: String,
    role: {
        type: String,
        enum: ["admin","subscriber","collaborator"],
        default: "subscriber"
    }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
