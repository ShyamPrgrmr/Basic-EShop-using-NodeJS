const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Products =  new Schema({

    //Id will generated by mongodb itself, So we dont need to generate it!

    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    imgsrc:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Products',Products)