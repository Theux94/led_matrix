"use strict"
var lm = require("../model/loginmodel.js");

class Login{
    //Checking Data, and the register or Login User

    checkData(req,res){
	lm.checklogin(req,res,req.post.login,req.post.password);
	
    }
}

module.exports.Login = Login;
