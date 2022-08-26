const express = require('express');
const program_data = require('../model/program_type');
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

  // admin select update category

  
adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
  category.findOne({_id:id}).then((categories)=>{
    res.send(categories);
  });
});

// admin Update Category

adminRouter.put('/CategoryUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  trainerCategory  = req.body.trainerCategory
  category.findByIdAndUpdate({"_id":id},
                                {$set:{"trainerCategory":trainerCategory
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// admin Remove Category

adminRouter.put('/CategoryRemove',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  statusCategory  = req.body.statusCategory
  category.findByIdAndUpdate({"_id":id},
                                {$set:{"statusCategory":0
                                }})
                                .then(function(){
                                  res.send();
                                })
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

// Admin view program list

adminRouter.get('/programview',function(req,res){
  program_data.find()
  .then(function(programdetails){
       res.send(programdetails);
  });
});

 // admin select program to be  updated 
adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
  program_data.findOne({_id:id}).then(()=>{
    res.send(programdetails);
  });
});

// admin Update program list

adminRouter.put('/ProgramUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  programtype = req.body.programtype,
  studentsNum=req.body.studentsNum,
  date=req.body.date
  program_data.findByIdAndUpdate({"_id":id},
                                {$set:{"programtype":programtype}},
                                {$set:{"studentsNum":studentsNum}},
                                {$set:{"date":date}})                           
                                .then(function(){
                                  res.send();
                                })
});

// admin Remove Category

adminRouter.put('/ProgramRemove',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  statusProgram  = req.body.statusProgram
  program_data.findByIdAndUpdate({"_id":id},
                                {$set:{"statusProgram":0
                                }})
                                .then(function(){
                                  res.send();
                                })
});

module.exports = adminRouter;