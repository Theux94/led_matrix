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
	var connections = [];
	var WebSocketServer = require('websocket').server;
	var wsServer = new WebSocketServer({
		httpServer: server });
    wsServer.on('request', function(r){
		console.log("Socket: "+ r.origin);
		var connection = r.accept('access', r.origin);
		connection.on("message",function(user){
			console.log("User "+ user.utf8Data +" is trying to connect");
			for (var i = 0; i < connections.length; i++) {
				if (connections[i][0] == connection){
					lm.logout(connections[i][1]);
					connections.splice(i,i+1);
					break;
				}
			}
			var access = lm.checkconnection(user.utf8Data).then(
				function(access){
					if(access) {
						connections.push([connection, user.utf8Data]);
						//connection.sendUTF("Wellcome "+ user.utf8Data);
					}
					else {
						connections.push([connection,null]);
						connection.sendUTF("User "+user.utf8Data+" is alreday connected");
					}
				}

			);
								
			
		});
		connection.on('close', function(description){
			for (var i = 0; i < connections.length; i++) {
				if (connections[i][0] == connection){
					if(connections[i][1]!=null){
						//console.log('Connection closed by '+connections[i][1]);
						lm.logout(connections[i][1]);
						connections.splice(i,i+1);
						break;
					}
					else console.log("THIS ONE SHOULD BE NOT CONNECTED");

				}
			}
		});

	});

}
}

module.exports.ITMApp = ITMApp
