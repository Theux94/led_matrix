"use strict";

var fs = require('fs');

//Liest Text-Dateien mit UFT-8 ein
function readFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, "utf-8", function (err, data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

//Liest Dateien ein, die nicht als UTF-8 aufgelöst werden sollen (primär Bilder)
function readImage(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data){
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

//Handelt die Einlese-Funktionen und ruft nach Abschluss callback auf
function getContentOfFile(filename, callback) {

    //Prüfen ob Bild oder was anderes gelesen werden soll
    if(filename.includes("image")) {
        readImage(filename).then(
            (data) => callback(true, data),
            (error) => callback(false, error)
        );
    } else {
        readFile(filename).then(
            (data) => callback(true, data),
            (error) => callback(false, error)
        );
    }
}

module.exports.getContentOfFile = getContentOfFile;

