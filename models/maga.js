const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    manganame: String,
    author: String,
    caps: Number,
    genre: ["gore", "mecha", "ecchi", "harem", "spokon", "nekketsu","gekiga","maho shojo","yuri","yaoi","jidaimono"],
    rate: Number,
    img_gitreview: String,
    traducedby: String
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;