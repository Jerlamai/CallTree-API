const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = mongoose.Types.ObjectId()

//create user Schema & model 
const UserSchema = new Schema({
    _id: Number,
    name: {
        type: String
    },
    position: {
        type: String
    },
    phone: {
        type:String,
        require: [true, 'phone is require']
    },
    alternate: [" "],
    admin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('user',UserSchema)

module.exports = User;