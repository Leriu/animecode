const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    userid: {type : mongoose.Schema.Types.ObjectId, ref: 'User'},
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
        'maho_shojo',
        'yuri',
        'yaoi',
        'jidaimono'
        ]
    },
    img_preview: String,
    manga: String,
    traducedby: String,
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;