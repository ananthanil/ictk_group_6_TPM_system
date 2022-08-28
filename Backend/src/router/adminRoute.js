const express = require('express');
const category = require('../model/trainer_category');
const activityType=require('../model/activityType');
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
//-----------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

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

// admin view activityType
  
 adminRouter.get('/activityTypeview',function(req,res){
 activityType.find({"statusactivityType":1})
.then(function(activityType){
       res.send(activityType);
  });
  });

// // admin select update activityType

// adminRouter.get("/:activityTypeid",(req, res)=>{
//  const activityTypeid = req.params.activityTypeid;

//  activityType.findOne({activityType_id:activityTypeid}).then((activityType)=>{
//   res.send(activityType);
//  });
//  });

// // admin Update activityType

//  adminRouter.put('/activityTypeUpdate',(req,res)=>{
//  console.log(req.body)
//  activityTypeid=req.body._activityTypeid;
//   actType  = req.body.activityType;
//  activityType.findByIdAndUpdate({"activityType_id":activityTypeid},
//                                {$set:{"activityType":actType
//                             }})
//                             .then(function(){
//                                res.send();
//                               })
// });

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
// });



module.exports = adminRouter;