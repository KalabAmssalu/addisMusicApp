const mongoose = require('mongoose')

//creating a user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;