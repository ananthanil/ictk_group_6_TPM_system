const express = require('express');
const category = require('../model/trainer_category');
const activityType=require('../model/activityType');
const trMode = require('../model/trainer_mode');
const PackageDetails = require('../model/package_type')

const adminRouter = express.Router();

// ------------ Insertion operations start ------------------

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

// admin insert acivityType

adminRouter.post('/addactivityType',function(req,res){
  console.log(req.body);
 
  var aType = {       
      activityType : req.body.activityType.activityType,
      statusactivityType : req.body.activityType.statusactivityType
    }       
 var aType = new activityType(aType);
 aType.save();
 console.log("added new activity type"+aType);
});

// Admin trainer mode insertion

adminRouter.post('/trainermodeadd',function(req,res){
  console.log(req.body);
  var tmode = {       
     trainingMode: req.body.trMode.trainingMode,
     statusTrainermode : req.body.trMode.statusTrainermode
    }  
         
 var tmode = new trMode(tmode);
 tmode.save();
 
});

adminRouter.post('/addPackage',function(req,res){
  console.log(req.body);
  var tpackage = {       
      // trainerCategory : req.body.category.trainerCategory,
      // statusCategory : req.body.category.statusCategory,
    PtrainerName : req.body.package.PtrainerName,
    PtrainerCategory : req.body.package.PtrainerCategory,
    PtrainerActivity : req.body.package.PtrainerActivity,
    PHourAmount : req.body.package.PHourAmount,
    pActivityAmount : req.body.package.pActivityAmount,
    packageStatus : req.body.package.packageStatus
    }       
 var tpackage = new PackageDetails(tpackage);
 tpackage.save();
});
// ------------ Insertion operations ends ------------------

// ------------ View operations Starts ------------------

// admin view category
  
adminRouter.get('/categoryview',function(req,res){
  category.find({"statusCategory":1})
  .then(function(trainertype){
       res.send(trainertype);
  });
});

// admin view activityType
  
adminRouter.get('/activityTypeview',function(req,res){
  activityType.find({"statusactivityType":1})
 .then(function(activityType){
        res.send(activityType);
   });
   });

   //trainer mode view

adminRouter.get('/TrainerModeview',function(req,res){
  trMode.find()
 .then(function(trainermode){
      res.send(trainermode);
 });
});

// ------------ View operations ends ------------------

// ------------ Update operations starts ------------------

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

// admin Update activityType

adminRouter.put('/activityTypeUpdate',(req,res)=>{
  console.log(req.body)
  activityTypeid=req.body._activityTypeid;
   actType  = req.body.activityType;
  activityType.findByIdAndUpdate({"activityType_id":activityTypeid},
                                {$set:{"activityType":actType
                             }})
                             .then(function(){
                                res.send();
                               })
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

// ------------ Update operations ends ------------------

// ------------ Delete operations starts ------------------

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

// admin Remove activity Type

adminRouter.put('/activityTypeRemove',(req,res)=>{
  console.log("backend router called");
console.log(req.body)
actid=req.body.activityType_id
statusactivityType  = req.body.statusactivityType
activityType.findByIdAndUpdate({"_id":actid},
                              {$set:{"statusactivityType":0
                              }})
                              .then(function(){
                                res.send();
                              })
                              console.log("deleted from db");
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

// ------------ Delete operations ends ------------------

// ------------ Update Selete operations starts ------------------

// admin select update category

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
  category.findOne({_id:id}).then((categories)=>{
    res.send(categories);
  });
});

// admin select update activityType

adminRouter.get("/:activityTypeid",(req, res)=>{
  const activityTypeid = req.params.activityTypeid;
 
  activityType.findOne({activityType_id:activityTypeid}).then((activityType)=>{
   res.send(activityType);
  });
  });

  // trainer mode  select update

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
     trMode.findOne({_id:id}).then((categories)=>{  
    res.send(categories);
  });
});
// ------------ Update Selete operations ends ------------------

module.exports = adminRouter;