const express = require('express');
const program_data = require('../model/program_type');
const category = require('../model/trainer_category');

const adminRouter = express.Router();

// adminRouter.get('', (req, res)=> {
//   res.send('adminRouter is listening');
// });

// HEllo

// admin inserting category

adminRouter.post('/add',function(req,res){
    console.log(req.body);
    var ttype = {       
        trainerCategory : req.body.category.trainerCategory,
        statusCategory : req.body.category.statusCategory
      }       
   var ttype = new category(ttype);
   ttype.save();
  });

  
  adminRouter.get('/categoryview',function(req,res){
    category.find()
    .then(function(trainertype){
         res.send(trainertype);
    });
  });


  // <------------------------- admin inserting programdata------------------------->

  adminRouter.post('/insertprogram',function(req,res){                  
    console.log(req.body);
    var ptype = {       
      programtype : req.body.program_data.programtype,
      studentsNum: req.body.program_data.studentsNum,
      date : req.body.program_data.date,
      statusProgram : req.body.program_data.statusProgram
      }       
   var ptype = new program_data(ptype);
   ptype.save();
  });

  
  adminRouter.get('/programview',function(req,res){
    program_data.find()
    .then(function(programdetails){
         res.send(programdetails);
    });
  });

module.exports = adminRouter;