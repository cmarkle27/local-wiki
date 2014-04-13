var static = require('node-static');
var staticDir = './public';
var localPort = 8080;
var file = new(static.Server)(staticDir); // config

// Serve files!
require('http').createServer(function (request, response) {
	request.addListener('end', function () {
		file.serve(request, response);
	});
}).listen(localPort); // config
console.log("Wikal started on port: " + localPort);
