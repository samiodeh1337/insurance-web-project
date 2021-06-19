const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectConfig = require('./config');


const port = process.env.PORT || projectConfig.port;
const mongooseUrl = process.env.MONGODB_URI || projectConfig.db.url;
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());							// support json encoded bodies
app.use(cors());

const UserRoute = require('./routes/user.route');
app.use('/api/users', UserRoute);

mongoose.connect(mongooseUrl, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).then(() => {
    console.log("DB connected");
    app.listen(port, () => {
        console.log(`started on port: ${port}`);
    });
}
).catch(error => { console.log("Cannot connect DB"); });


//block fav.ico
app.get('/favicon.ico', function (req, res) {
    res.end();
});

app.get("/", (req, res) => {
    res.status(200).send("insurance final project!");
});

