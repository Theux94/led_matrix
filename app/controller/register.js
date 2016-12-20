"use strict"
var rm = require("../model/registermodel.js");

class Register{
    //Checking Data, and the register or Login User

	checkData(req,res){ 

if (req.post.password==req.post.passwordR){
  rm.checkregister(req,res,req.post.email,req.post.username, req.post.password,"false");
}
else {
  res.setHeader('Content-Type','text/html');
  res.end("<p>You typed in two different passwords!</p>");
	}
}
 

}

module.exports.Register = Register;