var fs = require("fs");
// linking to data
// const data = require("./db/db.json");
let refinednotes = refinenotes();

// adds id to each db entry stored in json formate to co-operate with index.js functions
function refinenotes() {
  let data = fs.readFileSync("./db/db.json", "utf8");

  let notes = JSON.parse(data);

  // Give each note an ID that matches its index (this gets run for every time the page is refreshed)
  for (var x = 0; x < notes.length; x++) {
    notes[x].id = "" + x;
  }

  return notes;
}

// / ROUTING

module.exports = (app) => {
  // API GET Requests - provides user with refined db content when they enter the notes page

  app.get("/api/notes", (req, res) => res.json(refinenotes()));

  // API POST Requests - inputes new data to the db, data is refined, then populated on notes page

  app.post("/api/notes", (req, res) => {
    refinednotes.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(refinednotes), "utf8");
    res.json(true);
  });
};
