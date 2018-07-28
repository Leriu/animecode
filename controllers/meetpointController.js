const express = require('express');
const mpControl = express.Router();
const Meetpoint = require('../models/meetpoint');

mpControl.get('/', (req,res,next)=>{
    Meetpoint.find({},(err,docs)=>{
        res.status(200).json({ docs });
    })
});

mpControl.post('/new', (req,res,next)=>{
    const {name, description, longitude, latitude} = req.body;
    let location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };
    
      // Create a new Meetpoint with location
        const newMeetPoint = new Meetpoint( {
          name,
          description,
          location
        });
    
      // Save the meetpoint to the Database
      newMeetPoint.save()
        .then(()=> res.status(200).json({status: 'Añadido el marcardor del meetpoint'}))
        .catch(e => res.status(200).json({ status: e}));
});

module.exports = mpControl;