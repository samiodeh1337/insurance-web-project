const express = require('express')
const app = express();
const Connection = require('./modules/Config/General.json')
const PORT=Connection.nodeJs.PORT;
const Auth = require ('./modules/Pages/Auth/Login-controller.js');



// GET method route

app.use('/Auth',Auth)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});