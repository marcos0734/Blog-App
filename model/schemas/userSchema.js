const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },

    // profilepic:  String,

    password: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "user"
    }

})


//timestamp createdAt and updatedAt dono kr dega khud se....or isActive to upr likh hi diya h
userSchema.set('timestamps', true);
module.exports = mongoose.model("user", userSchema);