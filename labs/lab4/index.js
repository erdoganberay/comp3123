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

// Serve static files in /public (instruction.html will be at /instruction.html)
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname })
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

app.listen(SERVER_PORT, () => {
	console.log("Server is running on http://localhost:" + SERVER_PORT)
})

