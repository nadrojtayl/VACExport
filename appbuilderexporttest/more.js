var exec = require('child_process').exec;
exec('echo here', function callback(error, stdout, stderr){
	console.log(stdout);
    console.log(error);
    console.log(stderr);
 });