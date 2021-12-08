const mongoose = require('mongoose');

const AddresseeSchema = new mongoose.Schema({
    name: String,
    unity_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unity'
    }
});

module.exports = mongoose.model("Addressee", AddresseeSchema);