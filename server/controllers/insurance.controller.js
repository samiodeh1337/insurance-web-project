

const Insurance = require('../models/insurance.model');




exports.newRequest = function (req, res) {


    let newRequest = new Insurance({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        insuranceAmountRequested: req.body.insuranceAmountRequested,
        insuranceCompanyName: req.body.insuranceCompanyName,
        calculated: 0,
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
