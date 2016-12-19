"use strict"
var rm = require("../model/registermodel.js");

class Register{
    //Checking Data, and the register or Login User

    checkData(req,res){
        
	    rm.checkregister(req,res,req.post.email,req.post.username, req.post.password,"false");
    }
}

module.exports.Register = Register;