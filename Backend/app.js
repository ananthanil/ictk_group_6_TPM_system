const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
const adminRouter = require('./src/router/adminRoute');
var app = new express();
var PORT = 3666
app.use(cors());
app.use(bodyparser.json());

app.use('/api/admin/',adminRouter);

app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
  });