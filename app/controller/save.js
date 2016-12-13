"use strict"
var fw = require("../helper/filewriter");
function dataURItoBlob(dataURI) {
    var byteStr;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteStr = atob(dataURI.split(',')[1]);
    else
        byteStr = unescape(dataURI.split(',')[1]);

    var mimeStr = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var arr= new Uint8Array(byteStr.length);
    for (var i = 0; i < byteStr.length; i++) {
        arr[i] = byteStr.charCodeAt(i);
    }
}


function storeData(req,res){
    var workspace =JSON.parse(req.post.workspace);
    var img = dataURItoBlob(workspace.img_src);
    fw.writeFile('../model/img.png',img);
    console.log(workspace.scale);
    res.end();
}
    
module.exports.storeData = storeData;
