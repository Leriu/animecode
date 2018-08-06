const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rateSchema = new Schema({
    userID: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    mangaID: {type : mongoose.Schema.Types.ObjectId, ref: 'Manga'},
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