const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    }
});

const UseModel = mongoose.model("users", UserSchema)
module.exports = UseModel;