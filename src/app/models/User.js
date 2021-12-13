const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmed: Boolean,
    unity_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unity'
    }
});

module.exports = mongoose.model("User", UserSchema);