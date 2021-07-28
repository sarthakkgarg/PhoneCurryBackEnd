const express=require("express");
const app=express();
require("./db/conn");
const User = require("./model/UserSchema");
const Phone = require("./model/PhoneSchema");
const Auth = require("./router/authRegister")
const AuthLogin = require("./router/authLogin")
const PhoneSelector = require("./router/phoneSelector")
const SavePhoneData = require("./router/savePhoneData")
const ExtractData =  require("./router/extractData")
const ViewPhone = require("./router/viewPhones")

const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use(Auth);
app.use(AuthLogin);
app.use(PhoneSelector);
app.use(SavePhoneData);
app.use(ExtractData);
app.use(ViewPhone);



app.listen(5000,()=>{
    console.log("Run on port number 5000");
});
