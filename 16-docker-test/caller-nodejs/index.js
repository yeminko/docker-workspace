const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // fetch("http://localhost:3000")
  fetch("http://host.docker.internal:3000")
    .then((response) => response.text())
    .then((data) => {
      res.send("Fetched data: " + data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).send("Error fetching data");
    });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
