/**
 * Node.js in action
 */
var parse = require('url').parse;
module.exports.route = function route(obj, req, res, next) {
        console.log("ROUTE")
        if (!obj[req.method]) {
            next(res);
            return;
        }
        var routes = obj[req.method];
        var url = parse(req.url);
        var paths = Object.keys(routes);
        console.log("routes: " + routes.toString())
        console.log("url: "+ url)
        console.log("paths: "+ paths)
        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var fn = routes[path];
            console.log(i+" (path): "+path)
            path = path
                .replace(/\//g, '\\/')
                .replace(/:(\w+)/g, '([^\\/]+)');
            console.log(i+" (path): "+path)
            var re = new RegExp('^' + path + '$');
            console.log(i+"(re): "+re)
            console.log(i+"(url.pathname): "+url.pathname)
            var captures = url.pathname.match(re);
            console.log(i+"(captures): "+captures)
            if (captures) {
                var args = [req, res].concat(captures.slice(1));
                fn.apply(null, args);
                return;
            }
        }
        next(res);
};
