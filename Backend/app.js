const express = require('express');
var app = new express
var PORT = 3666
app.listen(PORT,function(){
    console.log(`hello`);
    console.log(`hello2`);
    console.log(`listening to port ${PORT}`);
  });