const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 4500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes

// API Routes
// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
require("./api-route")(app);

// html Routes
// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "notes.html"))
// );
require("./html-route")(app);

// Displays all characters
// app.get('/api/characters', (req, res) => res.json(characters));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
