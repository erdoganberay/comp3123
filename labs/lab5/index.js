const express = require("express")
const fs = require("fs")
var dateFormat = require("dateformat")

var books = require("./books")
var computers = require("./computers")

const app = express()
const router = express.Router()

let writeData = (data) => {
	data += "\n"
	fs.appendFile("server_log.txt", data, function(error) {
		if (error) {
			throw error
		}
		console.log("Log Saved!")
	})
}
// Middleware function
let logger = (request, response, next) => {
	const todays = dateFormat(Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
	let data = `[${todays} - ${request.originalUrl}]`
	writeData(data)
	next()
}
app.use(logger)

//todo
app.use("/books/computers", computers)

let booksLogger = (request, response, next) => {
	console.log("Books logger was called.")
	next()
}

app.listen(process.env.port || 8081)
console.log("Web server is listenning at port: " + (process.env.port || 8081))

