const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    company: String,
    package_cod: String,
    dateArrival: String,
    dateDelivery: String,
    status: String,
    unity_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unity'
    }
});

module.exports = mongoose.model("Package", PackageSchema);