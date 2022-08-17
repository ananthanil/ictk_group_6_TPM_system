const express = require('express');
var app = new express
const category = require('./src/model/trainer_category')
const cors = require('cors');
const path = require('path');
var PORT = 3666
app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
  });