

const User = require('../models/user.model');
const secret = require('../config').jwtSecret;
const jwt = require('jsonwebtoken');

exports.getAll = function (req, res) {
    User.find({}, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        return res.json(result);
    });
};

exports.login = function (req, res) {

    if (req.body.email == null) return res.json({ response: 'Error' });

    User.findOne({ email: req.body.email.toLowerCase() }, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        if ((result == null) || (result.password != req.body.password))
            return res.json({ response: 'Error', msg: 'Incorrect username or password' });
        result = result.toJSON();
        const token = jwt.sign({ email: result.email }, secret);
        result.token = token;
        delete result.password;
        return res.json({ response: 'Success', msg: 'Login successful', data: result });

    });
};

/*
const User = require('./models/user.model');
var newuser = new User({ firstname: "sami", lastname: "aa", email: "a1sd", password: "test" });
newuser.save(err => {
    console.log(err);
    console.log("aa");
});
*/
//check mail and password
function checkEmailAndPassword(email, pass) {
    if (email == null || pass == null) return false;
    if (!email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/))
        return false;
    if (pass.length < 6) {
        return false;
    } else if (!pass.match(/^(?=.*[A-Z])/)) {
        return false;
    } else if (!pass.match(/^(?=.*[a-z])/)) {
        return false;
    } else if (!pass.match(/^(?=.*\d)/)) {
        return false;
    } else if (!pass.match(/^(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#])/)) {
        return false;
    }
    return true;
}