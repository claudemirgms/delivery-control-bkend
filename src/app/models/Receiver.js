const mongoose = require('mongoose');

const ReceiverSchema = new mongoose.Schema({
    name: String,
    date: Date,
    package_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package'
    }
});

module.exports = mongoose.model("Receiver", ReceiverSchema);