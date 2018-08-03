const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    userid: String,
    manganame: String,
    author: String,
    caps: Number,
    genre: {
        type: String,
        enum: [
        'gore',
        'mecha',
        'ecchi',
        'harem',
        'spokon',
        'nekketsu',
        'gekiga',
        'maho-shojo',
        'yuri',
        'yaoi',
        'jidaimono'
        ]
    },
    img_review: String,
    traducedby: String,
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;