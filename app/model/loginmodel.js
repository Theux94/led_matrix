var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "./app/model/DB_users.db";
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);


function checklogin(req,res,user,passw){
    db.all("SELECT * FROM users where user = ?", user,  function(err, rows){
	if (err) 
	    console.log(err);
	else{ 
	    if (rows[0].PASSWORD != passw){
		res.setHeader('Content-Type','text/html')
		res.end("<p>WRONG PASSWORD OR USER</p>");
	    }
	    else{ 
		res.writeHead(301,
			      {Location: 'http://127.0.0.1:1337/principal',
			       'Set-Cookie': 'sesioncookie='+ user}
);
		res.end();
		
	    }
	    
	}
    });
}
function checkconnection(user){
	var access = false;
	db.all("SELECT CONNECTED FROM users where user = ?", user,  function(err, rows){
	if (err) 
	    console.log(err);
	else{ 
		if (rows[0].CONNECTED == "true"){
			console.log(user+" allready connected");
		}
		else{
			db.all('UPDATE USERS SET CONNECTED="true" where USER = ?',user, function(err, rows){
				if (err) 
	    			console.log(err);
				else
					console.log("Now "+user+" is connected"); 
					access = true;
				});
			}
		}
	});	
	return access;	    
}
module.exports.checklogin = checklogin;
module.exports.checkconnection = checkconnection;

