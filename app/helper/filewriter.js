"use strict";

var fs = require("fs");

function writeFile(filename,filedata) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename,filedata,'base64', function(err,data){
            if (err) {
                console.log("File writing error: " + err);
                reject(err)
            } else {
                console.log("Success writing file");
                resolve()
            }
        })
    })
}

module.exports.writeFile = writeFile;
