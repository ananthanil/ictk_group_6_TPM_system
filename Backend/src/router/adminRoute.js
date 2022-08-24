const express = require('express');
const category = require('../model/trainer_category');

const adminRouter = express.Router();

// adminRouter.get('', (req, res)=> {
//   res.send('adminRouter is listening');
// });

// HEllo

// admin insert category

adminRouter.post('/categoryadd',function(req,res){
    console.log(req.body);
    var ttype = {       
        trainerCategory : req.body.category.trainerCategory,
        statusCategory : req.body.category.statusCategory
      }       
   var ttype = new category(ttype);
   ttype.save();
  });

// admin view category
  
  adminRouter.get('/categoryview',function(req,res){
    category.find({"statusCategory":1})
    .then(function(trainertype){
         res.send(trainertype);
    });
  });

module.exports = adminRouter;