const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserauthSchema = new Schema ({

    id: {
        type: Boolean,
        default: false
    },
    password:{
        type: string,
        default: false
    }
})

const UserauthSchema = mongoose.model('user',UserauthSchema)

module.exports = Userauth;