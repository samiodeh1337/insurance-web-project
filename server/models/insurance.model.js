const mongoose = require('mongoose');


const insuranceSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    insuranceAmountRequested: { type: Number, required: true },
    insuranceCompanyName: { type: String, required: true },
    calculated: { type: Number, required: true, default: 0 },
    insuranceData: [{
        companyUserId: { type: String, required: true },
        PrevinsuranceCompanyName: { type: String, required: true },
        RequestNumber: { type: Number, required: true },
        Previousinsurancenumber: { type: String, required: true },
        PrevinsuranceID: { type: String, required: true },
    }],

});

module.exports = InsRequests = mongoose.model('InsRequests', insuranceSchema);