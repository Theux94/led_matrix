"use strict"

var fs = require("fs");

function decodeBase64Image(dataString) {
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
 
    var workspace =JSON.parse(req.post.workspace);
    var img = decodeBase64Image(workspace.img_src);
    fs.writeFile("29_image_base64.png",img.data, function(err) {
	if(err)console.log(err);
    });
    res.end();

}
    
module.exports.storeData = storeData;
