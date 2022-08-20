const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
const category = require('./src/model/trainer_category');
// const adminRouter = require('./src/router/adminRoute')
var app = new express();
var PORT = 3666
app.use(cors());
app.use(bodyparser.json());

// app.use('/api/admin/',adminRouter);

app.post('/add',function(req,res){
  console.log(req.body);
  var ttype = {       
      trainerCategory : req.body.category.trainerCategory,
    }       
 var ttype = new category(ttype);
 ttype.save();
});


app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
  });