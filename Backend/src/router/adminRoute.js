const express = require('express');
const category = require('../model/trainer_category');

const adminRouter = express.Router();

// adminRouter.get('', (req, res)=> {
//   res.send('adminRouter is listening');
// });

adminRouter.post('/add',function(req,res){
    console.log(req.body);
    var ttype = {       
        trainerCategory : req.body.category.trainerCategory,
      }       
   var ttype = new category(ttype);
   ttype.save();
  });

module.exports = adminRouter;