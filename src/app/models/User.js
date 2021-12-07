const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmed: Boolean,   
});

module.exports = mongoose.model("User", UserSchema);