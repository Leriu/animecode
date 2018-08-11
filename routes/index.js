const express = require('express');
const router  = express.Router();
const Manga = require('../models/manga');
const User = require('../models/User');

/* GET home page */
router.get('/', (req, res, next) => {
  Manga.find()
  .then(mangas =>{
    res.render('index', { user: req.user, mangas });
  })
  .catch(e => {
    console.log(e);
  })
  
});

router.get('/manga/:id', (req, res) => {
  let mangaID = req.params.id;
  Manga.findOne({id: `${mangaID}`})
    .then(manga =>{
      res.render('/mangas/manga_details', { manga })
    })
});


router.get('/profile/:id', (req, res, next) => {
  let userid = req.params.id;
  User.findOne({id: `${userid}`})
        .then(() => {
          res.render('profile', { user: req.user });
        })
        .catch( e => {
          console.log(e);
        })
});

router.get('/aboutus', (req, res, next) => {
  res.render('aboutus', { user: req.user });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
