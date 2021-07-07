const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectConfig = require('./config');
const jwt = require('./jwt');
const errorHandler = require('./errorHandler');

const port = process.env.PORT || projectConfig.port;
const mongooseUrl = process.env.MONGODB_URI || projectConfig.db.url;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());							// support json encoded bodies
app.use(cors());
app.use(jwt());
app.use(errorHandler);

const UserRoute = require('./routes/user.route');
const insuranceRoute = require('./routes/insurance.route');
app.use('/api/users', UserRoute);
app.use('/api/insurance', insuranceRoute);

mongoose.connect(mongooseUrl, { dbName: "insurance", useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => {
    console.log("DB connected");
    app.listen(port, () => {
        console.log(`started on port: ${port}`);
    });
}
).catch(error => { console.log("Cannot connect DB", error); });


//block fav.ico
app.get('/favicon.ico', function (req, res) {
    res.end();
});

const User = require('./models/user.model');
app.get("/", (req, res) => {
    User.find({}, (err, result) => {
        if (err) return res.json({ response: 'Error' });
        let users = [];
        result.forEach(elem => {
            users.push(elem.email);
        })
        return res.json(users);
    });
});

