var sqlite3 = require("sqlite3").verbose();
var fs = require("fs");
var file = "./app/model/DB_users.db";
var exists = fs.existsSync(file);
var db = new sqlite3.Database(file);

function checkregister(req,res,email,user,password,logedIn){
    db.run("INSERT INTO users VALUES (?,?,?,?)",email,user,password,logedIn,  function(err, rows){
	if (err) 
	    console.log(err);
	else{ 
        res.setHeader('Content-Type','text/html')
		res.end("<p>NEW USER</p>");
	    }
	    
	});
}

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
}
     
module.exports.checkregister = checkregister;