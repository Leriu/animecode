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


router.get('/profile/:id', (req, res, next) => {
  let userid = req.params.id;
  Manga.find({userid: `${userid}`}).populate('userid')
        .then(mangas => {
          res.render('profile', { user: req.user, mangas });
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
