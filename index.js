"use strict";

var path = require('path');
global.appRoot = path.resolve(__dirname);

var main = require("./app/controller/main");
var itmApp = new main.ITMApp(__dirname);
itmApp.startUp();
console.log("itmApp started")
