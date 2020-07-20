"use strict";
// translate_twilio_num("+13304003271");
var express = require("express");
var app = express();
var fs = require('fs');
var cors = require('cors');
app.use(cors());



app.get("/",function(req,res){
	res.send("HERE");
})


app.listen(process.env.PORT || 5000);