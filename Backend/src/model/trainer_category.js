const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:y1zccZWP7n2VK0j5@cluster0.ajlsmrf.mongodb.net/Tmpsystem?retryWrites=true&w=majority').then((success)=>{
    console.log('DB connected')
}).catch((err)=>{
    console.log('connection failed',err.message)
});

const Schema = mongoose.Schema;

var TainerCategory = new Schema({
    trainerCategories : String
});

var category = mongoose.model('trainercategory', TainerCategory); //UserData is the model and NewBookData is the schema

module.exports = category;