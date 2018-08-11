const express = require('express');
const mpControl = express.Router();
const Meetpoint = require('../models/meetpoint');

mpControl.get('/meetpoint', (req, res, next) => {
  Meetpoint.find()
  .then(meetpoints => {
    res.render('meetpoints/meetPoint', { user: req.user, meetpointJson : encodeURIComponent(JSON.stringify(meetpoints))});
  })
  .catch(e => {
    console.log(e);
  })
  
});


mpControl.get('/new', (req, res, next) => {
  res.render('meetpoints/new', { user: req.user });
});

mpControl.post('/new', (req,res,next)=>{
  
    let usrid = req.user.id; 
    const {name, description, longitude, latitude, direction} = req.body;
    let location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };
    
      // Create a new Meetpoint with location
        const newMeetPoint = new Meetpoint( {
          userID: usrid,
          name,
          description,
          location: location,
          direction
        });
    
      // Save the meetpoint to the Database
      newMeetPoint.save()
        .then(()=> res.render('meetpoints/new', { message: "The point was added correctly!!"}))
        .catch(e => res.render({ message: e}));
});

module.exports = mpControl;