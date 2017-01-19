"use strict"
var lm = require("../model/loginmodel.js");

class Login{
    //Checking Data, and the register or Login User

    checkData(req,res){
	lm.checklogin(req,res,req.post.login,req.post.password);
	
    }
    logout(req,res){
        var cookie = req.sessioncookie;
        lm.logout(cookie);                
        res.writeHead(301,
			      { 'Set-Cookie': 'sesioncookie='+cookie+'; expires=Sat, 31 Dec 2016 07:28:00 GMT',
                      Location: 'http://127.0.0.1:1337/public'
			       }
);
		res.end();
    }
}

module.exports.Login = Login;
