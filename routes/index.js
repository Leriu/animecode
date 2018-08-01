const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/new', (req, res, next) => {
  res.render('new');
});

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

router.get('/aboutus', (req, res, next) => {
  res.render('aboutus');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

module.exports = router;
