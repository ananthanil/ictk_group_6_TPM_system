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

// admin view update category

adminRouter.get("/:id",(req, res)=>{
  const id = req.params.id;
  category.findOne({_id:id}).then((categories)=>{
    res.send(categories);
  });
});

// admin Update Category

adminRouter.put('/CategoryUpdate',(req,res)=>{
  // console.log("hello");
  console.log(req.body)
  id=req.body._id
  trainerCategory  = req.body.trainerCategory
  // console.log(trainerCategory);
  category.findByIdAndUpdate({"_id":id},
                                {$set:{"trainerCategory":trainerCategory
                                }})
                                .then(function(){
                                  res.send();
                                })
});

module.exports = adminRouter;