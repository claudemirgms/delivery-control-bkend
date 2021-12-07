const mongoose = require('mongoose');

const UnitySchema = new mongoose.Schema({
    block: String,    
    apartment: Number,
});

module.exports = mongoose.model("Unity", UnitySchema);