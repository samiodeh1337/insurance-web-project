

const Insurance = require('../models/insurance.model');
const api_previous_insurances = require('../api/insurances');
const policy = require('../api/Policy.json');


exports.getall = function (req, res) {
    Insurance.find({}, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        return res.json(result);
    });

}

exports.calculate = function (req, result) {
    Insurance.findById(req.body._id, (err, res) => {
        if (err || res == null) return result.json({ response: 'Error' });


        let found = {}
        api_previous_insurances.forEach(elem => {
            if (elem.FirstName == res.FirstName && elem.LastName == res.LastName) {
                found = elem;
            }
        })

        let CarStatus = found.CarStatus;
        //read policy
        //console.log(policy);
        severity = "";

        if (policy.Low[0].CarStatus === CarStatus) {
            if (found.UserRank == 1)
                severity = "LOW";
        }
        if (policy.Mid[0].CarStatus === CarStatus) {
            severity = "MID";
        }
        if (policy.High[0].CarStatus === CarStatus) {
            if (found.UserRank != 1)
                severity = "HIGH";
        }
        if (policy.Severe[0].CarStatus === CarStatus) {
            severity = "SEVERE";
        }
        let insuranceEnable = found.insuranceEnable;
        let dateofEnblment = found.dateofEnblment;
        let UserRank = found.UserRank;
        let message = found.message;
        let calculated = 1;

        //update db
        let update_element = res;
        update_element.insuranceEnable = insuranceEnable;
        update_element.dateofEnblment = dateofEnblment;
        update_element.UserRank = UserRank;
        update_element.message = message;
        update_element.calculated = calculated;
        update_element.severity = severity;
        update_element.CarStatus = CarStatus;
        //console.log(update_element);

        Insurance.findByIdAndUpdate(req.body._id, { $set: update_element }, (err, res) => {
            if (err) return res.json({ response: 'Error' });
            if (res == null) return res.json({ response: 'Error', msg: 'Could not found' });
            return result.json({ response: 'Success', msg: 'Insurance id' + update_element._id + ' has been updated' });
        });

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
