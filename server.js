const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

// images
app.use(express.static(__dirname + "/public"));

app.get("/text", (req, res) => {
  fs.readFile("./public/lorem.txt", { encoding: "utf8" }, function(err, data) {
    if (err) console.log(err);
    else {
      res.send(data);
    }
  });
});

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    return console.error(err);
  }
  console.log("Listening at http://localhost:3000");
});
