const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User");
const path = require('path');

// Bcrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

let direcction = __dirname;
let a = direcction.split("routes")[0];

authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

authRoutes.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

authRoutes.get("/index", (req, res, next) => {
  res.render("auth/index");
});

authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  let userimage = req.files.userimage;

  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Complete all fields..." });
    return;
  }

  if (!req.files)
  return res.render("auth/signup", { message: "The userimage wasn't uploaded" });

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email: email,
      userimage: userimage.name
    });

    newUser.save((err) => {
      if (err) {
        res.render("auth/signup", { message: "Something went wrong" });
      } else {
        userimage.mv(a + '/public/images/userspics/' + userimage.name, function(err) {
          if (err)
            return res.status(500).send(err);
            res.redirect("/auth/login");
        });
      }
    });
  });
});

authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = authRoutes;
