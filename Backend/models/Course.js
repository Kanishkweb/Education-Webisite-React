const mongoose = require("mongoose")
const { Schema } = mongoose;
const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageURL:{
        type:String
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('course',CourseSchema)