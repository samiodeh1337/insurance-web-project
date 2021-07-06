const mongoose = require('mongoose');


const insuranceSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    insuranceAmountRequested: { type: Number, required: true },
    insuranceCompanyName: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true },
    calculated: { type: Number, required: true, default: 0 },
    insuranceData: [{
        companyUserId: { type: String, required: true },
        PrevinsuranceCompanyName: { type: String, required: true },
        RequestNumber: { type: Number, required: true },
        Previousinsurancenumber: { type: String, required: true },
        PrevinsuranceID: { type: String, required: true },
    }],
    insuranceEnable: { type: String, required: true, default: 0 },
    dateofEnblment: { type: String, required: true, default: new Date().toISOString().substring(0, 10) },
    CarStatus: { type: String, required: true, default: "no_status" },
    UserRank: { type: Number, required: true, default: 0 },
    message: { type: String, required: true, default: "none" },
});

module.exports = InsRequests = mongoose.model('InsRequests', insuranceSchema);