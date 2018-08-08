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
  Manga.findOne({_id: `${mangaID}`})
    .then(manga =>{
      res.render('/mangas/manga_details', { manga })
    })
});

router.get('/new', (req, res, next) => {
  res.render('/meetpoints/new', { user: req.user });
});

router.get('/meetpoint', (req, res, next) => {
  res.render('/meetpoints/meetPoint', { user: req.user });
});

router.get('/profile/:id', (req, res, next) => {
  let userid = req.params.id;
  User.findOne({_id: `${userid}`})
        .then(user => {
          res.render('profile', { user: user });
        })
        .catch( e => {
          console.log(e);
        })
});

router.get('/aboutus', (req, res, next) => {
  res.render('aboutus');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

<<<<<<< HEAD
router.get('/logo', (req, res, next) => {
  res.render('logo');
=======
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
>>>>>>> bc4603600240081a008552d3a6c695c1fbd56ebd
});

module.exports = router;
