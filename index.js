"use strict";
// translate_twilio_num("+13304003271");
var express = require("express");
var app = express();
var fs = require('fs');
var cors = require('cors');
app.use(cors());

const { exec } = require("child_process");



app.get("/",function(req,res){
	res.send("HERE");
	exec("node downloadvac.js Baptiste-Louis FlagRunGame flagrung.flagrung.com; expo publish",{
	  cwd: __dirname + "/appbuilderexporttest"
	}, (error, stdout, stderr) => {
		    if (error) {
		        console.log(`error: ${error.message}`);
		        return;
		    }
		    if (stderr) {
		        console.log(`stderr: ${stderr}`);
		        return;
		    }
		    console.log(`stdout: ${stdout}`);
		});


})

// console.log("Listening");
app.listen(process.env.PORT || 5000);
