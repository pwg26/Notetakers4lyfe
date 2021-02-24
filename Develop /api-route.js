var fs = require("fs");
// linking to data
// const data = require("./db/db.json");
let refinednotes = refinenotes();

function refinenotes() {
  let data = fs.readFileSync("./db/db.json", "utf8");

  let notes = JSON.parse(data);

  // Give each note an ID that matches its index (this gets run for every time the page is refreshed)
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = "" + i;
  }

  return notes;
}

// / ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", (req, res) => res.json(refinenotes()));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", (req, res) => {
    refinednotes.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(refinednotes), "utf8");
    res.json(true);
  });
};
