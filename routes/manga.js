const express = require('express');
const mangaRouter  = express.Router();
const Manga = require('../models/manga');
let generos = [];

let direcction = __dirname;
let a = direcction.split("routes")[0];

mangaRouter.get('/createmanga', (req, res) => {
    res.render('mangas/createmanga');
});

mangaRouter.post("/createmanga", (req, res) => {
    let userid = req.user.id;
    let img_preview = req.files.img_preview;
    let { manganame, author, caps, manga } = req.body;

    if( { manganame, author, caps } === "" ){
        res.render('mangas/createmanga', { message: "Complete all fields" });
        return;
    }

    if (!req.files)
      return res.render("mangas/createmanga", { message: "The userimage wasn't uploaded" });

    const newManga = new Manga({
        userid: userid,
        manganame,
        author,
        caps,
        img_preview: img_preview.name,
        manga
      });

      newManga.save((err) => {
        if (err) {
          res.render("mangas/createmanga", { message: "Something went wrong" });
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