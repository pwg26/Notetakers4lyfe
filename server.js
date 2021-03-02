const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 4500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes

// API Routes

require("./api-route")(app);

// html Routes

require("./html-route")(app);

// initializes server listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
