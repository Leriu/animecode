const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    manganame: String,
    author: String,
    caps: Number,
    genre: ["gore", "mecha", "ecchi", "harem", "spokon", "nekketsu","gekiga","maho shojo","yuri","yaoi","jidaimono"],
    rate: Number
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;