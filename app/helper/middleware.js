var filereader = require("./filereader");
var url = require("url");
var qs = require("querystring");
var router = require("./router");
var links = require("../controller/links");
var loginfile = require("../controller/login");
var login = new loginfile.Login;


function logger(req,res) {
    return new Promise(function (resolve, reject) {
        console.log("LOGGER" + req);
        resolve("LOGGER")
    });
}

function readingcookie(req, res) {
    return new Promise(
        function(resolve, reject) {
            console.log("Reading cookie: ");
	    req.get = (req.headers,true).query;
            if (req.headers.cookie != undefined){
		var cookie = req.headers.cookie;
		var scookie = cookie.split(";");
		scookie.forEach( function(cookie){
		    var splitCookie = cookie.split("=");
		    
		    if (splitCookie[0] == "sesioncookie"){
			req.sesioncookie = splitCookie[1];
			console.log(req.sesioncookie);
		    }
		   
		});
		resolve("COOKIE ");
            }
	    else 
		resolve("COOKIE");
	});
}

function readingdata(req, res) {
    return new Promise(
        function(resolve, reject) {
            console.log("Reading data: ");

            req.get = url.parse(req.url, true).query;
            console.log(req.get);

            if (req.method === "POST" || req.method === "PUT") {
                var body="";//JSON.stringify(params);
                req.on('data', (data) => body +=data)
                req.on('end', function() {
                    var postParams = qs.parse(body)
                    console.log(postParams);
                    req.post = postParams;
                    resolve("READINGDATA");
                })
            } else {
                resolve("READINGDATA");
            }
        }
    )
}

function publicfolder(req, res) {
    return new Promise(
        function(resolve, reject) {
            urlString = url.parse(req.url, true);

            if(urlString.pathname == "/public" || urlString.pathname == "/public/") {
                urlString.pathname = "/public/welcome.html";
            }

            console.log("Reading public folder: " + appRoot + urlString.pathname);

            filereader.getContentOfFile(appRoot + urlString.pathname, function (status, data) {
                if(status == true) {
                    if(urlString.pathname.includes("css"))  {
                        res.setHeader('Content-Type', 'text/css');
                    } else if(urlString.pathname.includes("png"))  {
                        res.setHeader('Content-Type', 'image/png');
                    } else if(urlString.pathname.includes("js"))  {
                        res.setHeader('Content-Type', 'application/javascript');
                    }
                    res.end(data);
                } else {
                    res.setHeader('Content-Type', 'text/plain');
                    res.end("Error occured: " + data);
                }
            });
        }
    )
}

function routing(req, res) {
    return new Promise(
        function(resolve, reject) {
            console.log("routing: ");

            var routes = {
                GET: {
                    '/links': function(req, res){
                        links.getLinks(req, res)
                    },
                    '/link/:id': function(req, res, id){
                        links.getLinkWithID(req, res, id);
                    },
		    '/validate/:token' : function(req, res, token){
			login.validate(req,res,token);
		    },
		    '/logout' : function(req,res){
			login.logout(req,res);
		    }
                },
                DELETE: {
                    '/link/:id': function(req, res, id){
                        links.deleteLinkWithID(res, res, id);
                    }
                },
                POST: {
                    '/links': function(req, res){
                        links.insertNewLink(req, res);
                    },
		    '/login': function(req,res){
			login.checkData(req,res);
                    },
		    '/signup': function(req, res){
			login.register(req,res);
		    }
		},
                PUT: {
                    '/link/:id/:url': function(req, res, id,url){
                        links.updateLinkWithID(req, res, id,url);
                    }
                }
            };

            router.route(routes, req, res, errorPage);

            resolve("ROUTING");
        }
    )
}

function errorPage(res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404 - File not found");
    console.log("****errorPage");
}


module.exports.logger = logger;
module.exports.readingdata = readingdata;
module.exports.publicfolder = publicfolder;
module.exports.routing = routing;
module.exports.readingcookie = readingcookie;
