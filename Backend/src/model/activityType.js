const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var activityType = new Schema({
    activityType : String,
    statusactivityType : Number
});

var activityType = mongoose.model('activityType', activityType); //UserData is the model and NewBookData is the schema

module.exports = activityType;
// hello