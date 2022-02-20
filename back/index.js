require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000

// Connection to database
require("./mongo")

// Controlers
const { createUser, logUser } = require("./controlers/users")
const { getSauces } = require("./controlers/sauces")

// Middleware
app.use(cors())
app.use(express.json())

// Routes

app.post("/api/auth/signup", createUser)
app.post("/api/auth/login", logUser)
app.get("/api/sauces", getSauces)
app.get("/", (req, res) => res.send("Hello world !"))

// Listen
app.listen(port, () => console.log("Listening on port " + port))
