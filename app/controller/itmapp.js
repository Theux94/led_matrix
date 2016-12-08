"use strict";

var http = require("http");
var mw = require("./../helper/middleware");

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
		
		}).listen("1337")
	console.log("startUp is called: http://127.0.0.1:1337");
    }
}

module.exports.ITMApp = ITMApp
