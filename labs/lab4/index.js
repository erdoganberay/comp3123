/*
 * Purpose: 
 * Express framework with Node.js
 * - Try GET, POST,PUT DELETE methods
 * - use routes instead of pure paths - like and API in your own
 *   softwares backend
 * - Compare and contrast GET query vs params
 */

const express = require("express");
const app = express()

const SERVER_PORT = process.env.PORT || 3000;

// Middleware setup for each of our needs on the web server
// Serving files
// Public folder is not usually accesible by default
// Notice there is no real folder called static.
app.use("/static", express.static("public"))

// Serving JSON
app.use(express.json())

// Serving traditional HTML body
// If we add the object parameter with property extended:true
// we can use the qs library instead queryString
app.use(express.urlencoded({ extended: true }))

// ----------------------------------------------------------------------

// http://localhost:3000
app.get("/", (request, response) => {
	response.send("<h1>Welcome to the ROOT</h1>")
})

// http://localhost:3000/hello
app.get("/hello", (request, response) => {
	response.status(200).send("<h1>Welcome to the path /hello</h1>")
})

app.get("/college", (request, response) => {
	const college = {
		method: "GET", // this is not anything built in we created this property
		name: "George Brown Polytechnic",
		location: "Toronto",
		established: 1967
	}
	response.json(college) // We treat our backend as an API
})


app.get("/students/:name/:age/:city", (request, response) => {
	console.log(request.params)
	if (!request.params.name || !request.params.age || !request.params.city) {
		return response.status(400).json({ error: "Missing path parameters" })
	}
	const name = request.params.name;
	const age = request.params.age;
	const city = request.params.city;

	response.json({
		student_name: name,
		student_age: age,
		student_city: city,
	})

})

app.post("/college", (request, response) => {
	const college = {
		method: "POST", // this is not anything built in we created this property
		name: "George Brown Polytechnic",
		location: "Toronto",
		established: 1967
	}
	response.json(college) // We treat our backend as an API
})


app.put("/college", (request, response) => {
	const college = {
		method: "PUT", // this is not anything built in we created this property
		name: "George Brown Polytechnic",
		location: "Toronto",
		established: 1967
	}
	response.json(college)
})

app.delete("/college", (request, response) => {
	const college = {
		method: "DELETE", // this is not anything built in we created this property
		name: "George Brown Polytechnic",
		location: "Toronto",
		established: 1967
	}
	response.json(college)

})


app.listen(SERVER_PORT, () => {
	console.log("Server is running on http://localhost:" + SERVER_PORT)
})

