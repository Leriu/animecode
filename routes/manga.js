const express = require('express');
const mangaRouter  = express.Router();
const Manga = require('../models/manga');
let generos = [];

mangaRouter.get('/createmanga', (req, res) => {
    res.render('/mangas/create_manga');
});

mangaRouter.post("/create_manga", (req, res) => {
    let userid = req.params.id;
    let { manganame, author, caps, gore, mecha, ecchi, harem, spokon, nekketsu, gekiga, maho_shojo, yuri, yaoi, jidaimono, img_review, traducedby, manga } = req.body;

    if( { manganame, author, caps, gore, mecha, ecchi, harem, spokon, nekketsu, gekiga, maho_shojo, yuri, yaoi, jidaimono, img_review, traducedby, manga } != "" ){
        res.render('/mangas/create_manga', { message: "Complete all fields" });
        return;
    }

    const newManga = new Manga({
        userid = userid,
        manganame,
        author,
        caps,
        genre = [],
        img_review,
        manga,
        traducedby
      });

      newManga.save((err) => {
        if (err) {
          res.render("/mangas/create_manga", { message: "Something went wrong" });
        } else {
          res.redirect("/profile/:id");
        }
      });
});

mangaRouter.get('/edit_manga/:id', (req, res) => {
  
});

module.exports = mangaRouter;