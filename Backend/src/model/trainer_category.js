const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log('connection failed',err.message)
});
// mongoose.connect('mongodb://localhost:27017/Tmpsystem')
const Schema = mongoose.Schema;

var TainerCategory = new Schema({
    trainerCategory : String
});

var category = mongoose.model('trainertype', TainerCategory); //UserData is the model and NewBookData is the schema

module.exports = category;