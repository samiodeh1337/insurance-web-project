

const Insurance = require('../models/insurance.model');
// import api_previous_insurances from '../api/insurances.json';



exports.getall = function (req, res) {
    Insurance.find({}, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        return res.json(result);
    });

}

exports.calculate = function (req, res) {
    Insurance.find({ _id: req.body._id }, (err, res) => {
        if (err) return res.json({ response: 'Error' });
        //read car status from [firstname][lastname].json
        let firstname = res.firstname;
        let lastname = res.lastname;



        return res.json("test");
        //read policy
        //update db
    });
}

exports.newRequest = function (req, res) {


    let newRequest = new Insurance({

        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        email: req.body.email,
        insuranceAmountRequested: req.body.insuranceAmountRequested,
        insuranceCompanyName: req.body.insuranceCompanyName,
        calculated: 0,
        phone: req.body.phone,
        comment: req.body.comment,
        insuranceData: [{
            companyUserId: req.body.companyUserId,
            PrevinsuranceCompanyName: req.body.PrevinsuranceCompanyName,
            RequestNumber: between(1, 100000),
            Previousinsurancenumber: req.body.Previousinsurancenumber,
            PrevinsuranceID: req.body.PrevinsuranceID,
        }],
    });

    newRequest.save((err, result) => {
        if (err) {
            console.log(err);
            return res.json({ response: 'Error', msg: 'Could not send your Request!' });
        }
        return res.json({ response: 'Success', msg: 'Request Sent!', data: newRequest });
    });

};


function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

/*
const User = require('./models/user.model');
var newuser = new User({ firstname: "sami", lastname: "aa", email: "a1sd", password: "test" });
newuser.save(err => {
    console.log(err);
    console.log("aa");
});
*/
