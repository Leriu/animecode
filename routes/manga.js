const express = require('express');
const mangaRouter  = express.Router();
const Manga = require('../models/manga');

let direcction = __dirname;
let a = direcction.split("routes")[0];

mangaRouter.get('/createmanga', (req, res) => {
    res.render('mangas/createmanga', {user: req.user});
});

mangaRouter.get('/:id', (req, res) => {
  let mangaID = req.params.id;
  Manga.findOne({ "_id":  `${mangaID}` })
    .then(manga => {
      res.render('mangas/manga_details', {user: req.user, manga , manga2: encodeURIComponent(JSON.stringify(manga)) })
    })
});

mangaRouter.get('/delete/:id', (req, res) => {
  let mangaid = req.params.id;
  let userid = req.user.id;
  Manga.findOneAndRemove({"_id": `${ mangaid }`})
      .then(() => {
        res.redirect('/profile/' + userid)
      })
      .catch(e => {
        console.log(e);
      })
});

mangaRouter.post("/createmanga", (req, res) => {
    let userid = req.user.id;
    let img_preview = req.files.img_preview;
    let pdf = req.files.manga;
    let directory = "/images/pdfs/";
    let { manganame, author, caps, manga, genre, traducedby } = req.body;

    if( { manganame, author, caps, genre, traducedby } === "" ){
        res.render('mangas/createmanga', { message: "Complete all fields" });
        return;
    }

    if (typeof(req.files[0]) === "undefined" || typeof(req.files[1]) === "undefined")
      return res.render("mangas/createmanga", { message: "Please select an image and pdf for your manga..." });

    const newManga = new Manga({
        userid: userid,
        manganame,
        author,
        caps,
        img_preview: img_preview.name,
        manga: directory + pdf.name,
        traducedby,
        genre
      });

      newManga.save((err) => {
        if (err) {
          res.render("mangas/createmanga", { message: "Something went wrong" });
        } else {
          img_preview.mv(a + '/public/images/previewimages/' + img_preview.name, function() {
            pdf.mv(a + '/public/images/pdfs/' + pdf.name, function(err){
              if (err)
              return res.status(500).send(err);
              res.redirect("/profile/" + userid);
            })
          });
          
        }
      });
});

mangaRouter.get('/edit_manga/:id', (req, res) => {
  
});

module.exports = mangaRouter;