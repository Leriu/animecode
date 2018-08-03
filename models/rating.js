const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rateSchema = new Schema({
    userID: String,
    mangaID: String,
    rate: {
        type: String,
        enum: [
            'like',
            'dislike',
            'neutral'
        ]
    },
    stars: Number
})

const Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate;