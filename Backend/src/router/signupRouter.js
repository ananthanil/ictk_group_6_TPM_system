const express = require('express');
const signup = require('../model/signup');
const signupRouter = express.Router();
signupRouter.post('/trainersignup',function(req,res){
    console.log(req.body);
    var ttype = {       
        Ufirstname : req.body.trainer.Ufirstname,
    Ulastname : req.body.trainer.Ulastname,
    Uemail :req.body.trainer.Uemail,
    Umobile : req.body.trainer.Umobile,
    Upassword : req.body.trainer.Upassword,
    Urole : req.body.trainer.Urole,
    Ustatus : req.body.trainer.Ustatus
  
      }       
   var ttype = new signup(ttype);
   ttype.save();
  });

  signupRouter.post('/login',function(req,res){

  });

module.exports = signupRouter;