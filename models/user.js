const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema & model 
const UserSchema = new Schema({
    name: {
        type: String,
        require: [true,'Name field is require']
    },
    position: {
        type: String
    },
    telNum: {
        type:String,
        require: [true, 'Tel is require']
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('user',UserSchema)

module.exports = User;