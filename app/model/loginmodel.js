var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "./app/model/DB_users.db";
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);


function checklogin(req,res,user,passw){
    db.all("SELECT * FROM users where name = ?", user,  function(err, rows){
	if (err) 
	    console.log(err);
	else{ 
	    if (rows[0].passw != passw){
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
	    
module.exports.checklogin = checklogin;
