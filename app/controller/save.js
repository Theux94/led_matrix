"use strict"

var fs = require("fs");
var PythonShell = require('python-shell');
PythonShell.defaultOptions = {
        scriptPath: './app/python'
    };

function decodeBase64Image(dataString)
{
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = {};

    if (matches.length !== 3)
    {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}


function storeData(req,res){
 
    var workspace =req.post.img_src;
    var img = decodeBase64Image(workspace);
    fs.writeFile("app/model/img.png",img.data, function(err) {
	if(err)console.log("IMG error "+err);
    });
    res.end();
    storeJSON(req.post.img_x,req.post.img_y,req.post.width);
    PyCall();

}

function storeJSON(img_x,img_y,img_width){
    var json = JSON.stringify({ x: img_x,
                                y: img_y,
                                width: img_width});
    fs.writeFile("app/model/workspace.json",json,function(err) {
	        if(err)console.log("JSON error "+ err);
        });
}


 function PyCall(){
     PythonShell.run('img.py', function (err) {
        if (err) throw err;
            console.log('finished');
    });

 }

module.exports.storeData = storeData;
