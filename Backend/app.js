const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
const adminRouter = require('./src/router/adminRoute')
const signupRouter = require('./src/router/signupRouter')

var app = new express();
var PORT = 3666
app.use(cors());
app.use(bodyparser.json());

app.use('/api/admin/',adminRouter);
app.use('/api/user', signupRouter);

app.listen(PORT,function(){
    console.log(`listening to port ${PORT}`);
  });