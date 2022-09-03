const express = require('express');
const tsheet = require('../model/timeSheet');
const activityType=require('../model/activityType');
const trMode = require('../model/trainer_mode');
const trainerRouter = express.Router();


trainerRouter.get('/activityTypeview',function(req,res){
     activityType.find({"statusactivityType":1})
    .then(function(activityType){
          res.send(activityType);
      });
      });

trainerRouter.get('/TrainerModeview',function(req,res){
     trMode.find()
    .then(function(trainermode){
         res.send(trainermode);
    });
   });
  
module.exports = trainerRouter;