/*
 * Run nodejs file via localhost (127.0.0.1)
 *
 * */

var http = require("http")

// Remember callback functions best written in arrow syntax
http.createServer((request,response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.end("Hello World - The server is up and running")
	
}).listen(8088)
