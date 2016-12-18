"use strict"

var fs = require("fs");

function decodeBase64Image(img) {
    var ext = img.split(';')[0].match(/jpeg|png|gif/)[0];
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(img, 'base64');
    fs.writeFile('./app/model/img' + ext, buf);
}


function storeData(req,res){
    var workspace =JSON.parse(req.post.workspace);
    decodeBase64Image(workspace.img_src);
    res.end();
}
    
module.exports.storeData = storeData;
