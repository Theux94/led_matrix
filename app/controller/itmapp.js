"use strict";

var http = require("http");
var mw = require("./../helper/middleware");
var lm = require("./../model/loginmodel")

class ITMApp {
    constructor(entryPath) {
	this.entryPath = entryPath;
    }
    startUp() {
	var entryPath = this.entryPath;
	var server = http.createServer(function(req, res) {
	    console.log(req.url);

	    var mwModules = [ [mw.logger,"/"], [mw.readingdata,"/"],[mw.publicfolder,'/public'],[mw.routing,"/"]]
	    var sequence = Promise.resolve()
	    console.log("****DEBUG AUSGABE");

	    mwModules.forEach(function(mwModulesArray) {
		var func = mwModulesArray[0]
		var path = mwModulesArray[1]
		if (req.url.search(path) >= 0) {
		    sequence = sequence.then(function () {
			return func.call(null, req, res, path);
		    }).then(function (msg) {
			console.log(msg + ' fetched!')
		    })
		}
	    })
	    sequence = sequence.catch(function (err) {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('try again');
		console.log('Error ' + err);
	    })
		
		}).listen("1337");
	console.log("startUp is called: http://127.0.0.1:1337/public");
	var user_connected = null;
	var WebSocketServer = require('websocket').server; 
	var wsServer = new WebSocketServer({     
		httpServer: server });
    wsServer.on('request', function(r){
		console.log("Socket: "+ r.origin);
		var connection = r.accept('access', r.origin);
		connection.on("message",function(user){
			user_connected = user.utf8Data;
			console.log("User "+ user.utf8Data +" is trying to connect");			
			var access = lm.checkconnection(user_connected);
		});
		connection.on('close', function(description){
		    console.log('Connection closed by '+user_connected);
		    lm.logout(user_connected);
		    
		});
		
	});	
			
}	
}

module.exports.ITMApp = ITMApp
