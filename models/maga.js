const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    userid: String,
    manganame: String,
    author: String,
    caps: Number,
    genre: {
        gore: Boolean,
        mecha: Boolean,
        ecchi: Boolean,
        harem: Boolean,
        spokon: Boolean,
        nekketsu: Boolean,
        gekiga: Boolean,
        maho_shojo: Boolean,
        yuri: Boolean,
        yaoi: Boolean,
        jidaimono: Boolean
    },
    rate: {
        like: Number,
        soso: Number,
        dislike: Number
    },
    img_gitreview: String,
    traducedby: String,
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;