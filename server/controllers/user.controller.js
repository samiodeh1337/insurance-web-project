

const User = require('../models/user.model');

exports.getAll = function (req, res) {
    User.find({}, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        return res.json(result);
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