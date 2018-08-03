const express = require('express');
const router  = express.Router();
const Manga = require('../models/manga');
const User = require('../models/User');
//const fs = require('fs');
//const navbar = fs.readFileSync('./views/navbar.hbs', 'utf8');

//const navComponent = { navbar: navbar };
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { user: req.user });
});

router.get('/new', (req, res, next) => {
  res.render('new', { user: req.user });
});

router.get('/meetpoint', (req, res, next) => {
  res.render('meetPoint', { user: req.user });
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
