const express = require('express');
const category = require('../model/trainer_category');
const trMode = require('../model/trainer_mode');

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

// ---------------trainer mode operation start----------------

// trainer mode insertion

adminRouter.post('/trainermodeadd',function(req,res){
  console.log(req.body);
  var tmode = {       
     trainingMode: req.body.trMode.trainingMode,
     statusTrainermode : req.body.trMode.statusTrainermode
    }  
         
 var tmode = new trMode(tmode);
 tmode.save();
 
});

//trainer mode view

adminRouter.get('/TrainerModeview',function(req,res){
   trMode.find()
  .then(function(trainermode){
       res.send(trainermode);
  });
});

// trainer mode  select update

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
     trMode.findOne({_id:id}).then((categories)=>{  //
    res.send(categories);
  });
});

// trainer mode update

adminRouter.put('/CategoryUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  trainerMode = req.body.trainerMode
  trMode.findByIdAndUpdate({"_id":id},
                                {$set:{"trainerMode":trainerMode
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// trainer mode remove

  adminRouter.put('/TrainmermodeRemove',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  trainerMode = req.body.trainerMode
  trMode.findByIdAndUpdate({"_id":id},
                                {$set:{"trainerMode":0
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// -------------trainer mode operation end----------------


// admin select update category

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
  category.findOne({_id:id}).then((categories)=>{
    res.send(categories);
  });
});

module.exports = adminRouter;


