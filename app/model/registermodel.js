var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "./app/model/DB_users.db";
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);
var existsBool;

function checkregister(req,res,email,user,password,logedIn){

	db.all("SELECT * from users WHERE email=?",email, function(err, rows){
		console.log("rows!!!:"+rows);
			if (typeof rows[0] != 'undefined'){
				existsBool=true;
			}
			else{
				existsBool=false;
				console.log("existboolsTRUE?"+existsBool)
			}
		});
	console.log("WICHTIGG?"+existsBool)
	
	
	db.all("SELECT * from users WHERE user=?",user, function(err, rows2){
		console.log("rows2!!!:"+rows2);
			if (typeof rows2[0] != 'undefined'){
				existsBool=true;
				console.log("richtig!"+existsBool);
			}
			else if (existsBool!=true){
				existsBool=false;
				console.log("existboolsTRUE?"+existsBool)
			}
		});
	
	
	if (existsBool!=true){
		console.log("exists???"+existsBool);
    db.run("INSERT INTO users VALUES (?,?,?,?)",email,user,password,logedIn,  function(err, rows3){
	if (err) 
	    console.log(err);
	else{ 
        res.setHeader('Content-Type','text/html')
		res.end("<p>NEW USER</p>");
	    }
	    
	});}
	else {
		res.setHeader('Content-Type','text/html')
		res.end("<p>Your E-Mail or User does already exists</p>");
	}
}
/*
function checkRegister(req,res,email,user,password,logedIn){
   
  console.log("DATABASE CONTENT:" + db.all("SELECT * FROM users"));
  var stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?)"); 
  stmt.run(email,user,password,logedIn); 
 
 
    db.all("SELECT * FROM users where user = ?", user,  function(err, rows){
 if (err) 
     console.log(err);
 else{ 
     if (rows[0].user == user){
  res.setHeader('Content-Type','text/html')
  res.end("<p>Username exists! Choose another name.</p>");
     }
     else{
   
   
  console.log(db.all("SELECT * FROM users"));
  var stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?)"); 
  stmt.run(email,user,password,logedIn); 
   
  res.writeHead(301,
         {Location: 'http://127.0.0.1:1337/principal',
          'Set-Cookie': 'sesioncookie='+ user}
);
  res.end();
  
     }
     
 }
    });
}*/
     
module.exports.checkregister = checkregister;