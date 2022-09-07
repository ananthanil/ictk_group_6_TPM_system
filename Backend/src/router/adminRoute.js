const express = require('express');
const category = require('../model/trainer_category');
const activityType=require('../model/activityType');
const trMode = require('../model/trainer_mode');
const PackageDetails = require('../model/package_type');
const signup = require('../model/signup')

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

// Admin Trainer Package insertion

adminRouter.post('/addPackage',function(req,res){
  console.log(req.body);
  var tpackage = {       
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

// admin add Trainer insertion

adminRouter.post('/trainerdetailsadd',function(req,res){
  console.log(req.body);
  var tdetals = {       
  Ufirstname : req.body.signup.Ufirstname,
  Ulastname : req.body.signup.Ulastname,
  Uemail :req.body.signup.Uemail,
  Umobile : req.body.signup.Umobile,
  Upassword : req.body.signup.Upassword,
  Urole : req.body.signup.Urole,
  Ustatus : req.body.signup.Ustatus

    }       
 var tdetals = new signup(tdetals);
 tdetals.save();
});


// ------------ Insertion operations ends ------------------
// ------------ View operations Starts ---------------------

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
  trMode.find({"statusTrainermode" :1} )
 .then(function(trainermode){
      res.send(trainermode);
 });
});
 //Package view
  adminRouter.get('/packageview',function(req,res){
    PackageDetails.find({"packageStatus":1})
   .then(function(package){
        res.send(package);
   });
  });

  // admin add trainer view

  adminRouter.get('/TrainerDetailsview',function(req,res){
    signup.find({"Ustatus":1})  
   .then(function(signup){
        res.send(signup);
   });
  });

// ------------ View operations ends ----------------------

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
// admin Update Package

adminRouter.put('/PackageUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  PtrainerName = req.body.PtrainerName,
  PtrainerCategory = req.body.PtrainerCategory,
  PtrainerActivity = req.body.PtrainerActivity,
  PHourAmount = req.body.PHourAmount,
  pActivityAmount = req.body.pActivityAmount
  PackageDetails.findByIdAndUpdate({"_id":id},
                                {$set:{"PtrainerName":PtrainerName,
                                       "PtrainerCategory" : PtrainerCategory,
                                       "PtrainerActivity" : PtrainerActivity,
                                       "PHourAmount" : PHourAmount,
                                       "pActivityAmount" : pActivityAmount
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// admin add trainer update
  
adminRouter.put('/TrainerdetailsUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  Ufirstname= req.body.Ufirstname,
  Ulastname= req.body.Ulastname,
  Uemail= req.body.Uemail,
  Umobile = req.body.Umobile,
  Upassword = req.body.Upassword
  signup.findByIdAndUpdate({"_id":id},
                                {$set:{"Ufirstname" :Ufirstname,
                                        "Ulastname" : Ulastname,
                                        "Uemail" : Uemail,
                                        "Umobile" : Umobile,
                                        "Upassword" :Upassword
                                      }})
                                .then(function(){
                                  res.send();
                                })
});

// ------------ Update operations ends --------------------
// ------------ Delete operations starts ------------------

// admin Remove activity Type

// adminRouter.put('/activityTypeRemove',(req,res)=>{
//   console.log("backend router called");
// console.log(req.body)
// actid=req.body.activityType_id
// statusactivityType  = req.body.statusactivityType
// activityType.findByIdAndUpdate({"_id":actid},
//                               {$set:{"statusactivityType":0
//                               }})
//                               .then(function(){
//                                 res.send();
//                               })
//                               console.log("deleted from db");
                            

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

// ------------ Insertion operations ends ------------------
// ------------ View operations Starts ---------------------

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
  trMode.find({"statusTrainermode":1})
 .then(function(trainermode){
      res.send(trainermode);
 });
});

 //Package view
  adminRouter.get('/packageview',function(req,res){
    PackageDetails.find({"packageStatus":1})
   .then(function(package){
        res.send(package);
   });
  });
// ------------ View operations ends ----------------------
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

adminRouter.put('/TrainermodeUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  trainingMode = req.body.trainingMode
  trMode.findByIdAndUpdate({"_id":id},
                                {$set:{"trainingMode":trainingMode
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// admin Update Package

adminRouter.put('/PackageUpdate',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  PtrainerName = req.body.PtrainerName,
  PtrainerCategory = req.body.PtrainerCategory,
  PtrainerActivity = req.body.PtrainerActivity,
  PHourAmount = req.body.PHourAmount,
  pActivityAmount = req.body.pActivityAmount
  PackageDetails.findByIdAndUpdate({"_id":id},
                                {$set:{"PtrainerName":PtrainerName,
                                       "PtrainerCategory" : PtrainerCategory,
                                       "PtrainerActivity" : PtrainerActivity,
                                       "PHourAmount" : PHourAmount,
                                       "pActivityAmount" : pActivityAmount
                                }})
                                .then(function(){
                                  res.send();
                                })
});
// ------------ Update operations ends --------------------
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


adminRouter.put('/TrainermodeRemove',(req,res)=>{

  console.log(req.body)
  id=req.body._id
  statusTrainermode = req.body.statusTrainermode
  trMode.findByIdAndUpdate({"_id":id},
                                {$set:{"statusTrainermode":0
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// Package remove

adminRouter.put('/PackageRemove',(req,res)=>{
  console.log(req.body)
  id=req.body._id
  packageStatus  = req.body.packageStatus
  PackageDetails.findByIdAndUpdate({"_id":id},
                                {$set:{"packageStatus":0
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// admin add trainer remove

adminRouter.put('/TrainerdetailsRemove',(req,res)=>{

  console.log(req.body)
  id=req.body._id
  Ustatus= req.body.Ustatus
  signup.findByIdAndUpdate({"_id":id},
                                {$set:{"Ustatus":0
                                }})
                                .then(function(){
                                  res.send();
                                })
});

// ------------ Delete operations ends ---------------------------
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
  adminRouter.get("/:activityTypeid",(req, res)=>{
    const activityTypeid = req.params.activityTypeid;
   
    activityType.findOne({activityType_id:activityTypeid}).then((activityType)=>{
     res.send(activityType);
    });
    });
// trainer mode  select update

adminRouter.get("/TrainermodeSelect/:id",(req, res)=>{
  const id = req.params.id;
     trMode.findOne({_id:id}).then((mode)=>{  
    res.send(mode);
  });
});



// package mode  select update

adminRouter.get("/packageselect/:id",(req, res)=>{
  const id = req.params.id;
  PackageDetails.findOne({_id:id}).then((pdetails)=>{
    res.send(pdetails);
  });
});

// 



  // trainer mode  select update

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
     trMode.findOne({_id:id}).then((categories)=>{  
    res.send(categories);
  });
});

// package mode  select update
adminRouter.get("/packageselect/:id",(req, res)=>{
  const id = req.params.id;
  PackageDetails.findOne({_id:id}).then((pdetails)=>{
    res.send(pdetails);
  });
});

// admin add trainer select update

adminRouter.get("/TrainerdetailsSelect/:id",(req, res)=>{
  const id = req.params.id;
    signup.findOne({_id:id}).then((tdetals)=>{  
    res.send(tdetals);
  });
});
// ------------ Update Selete operations ends ------------------

module.exports = adminRouter;