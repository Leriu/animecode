const express = require('express');
const mangaRouter  = express.Router();
const Manga = require('../models/manga');
let generos = [];

mangaRouter.get('/createmanga', (req, res) => {
    res.render('/mangas/create_manga');
});

mangaRouter.post("/createmanga", (req, res) => {
    let userid = req.user.id;
    let { manganame, author, caps, manga } = req.body;

    if( { manganame, author, caps, manga } != "" ){
        res.render('/mangas/create_manga', { message: "Complete all fields" });
        return;
    }

    if (!req.files)
      return res.render("mangas/createmanga", { message: "The userimage wasn't uploaded" });

    const newManga = new Manga({
        userid: userid,
        manganame,
        author,
        caps,
        img_review,
        manga,
        traducedby
      });

      newManga.save((err) => {
        if (err) {
          res.render("/mangas/create_manga", { message: "Something went wrong" });
        } else {
          img_preview.mv(a + '/public/images/previewimages/' + img_preview.name, function(err) {
            if (err)
              return res.status(500).send(err);
              res.redirect("/profile/" + userid);
          });
        }
      });
});

mangaRouter.get('/edit_manga/:id', (req, res) => {
  
});

module.exports = mangaRouter;