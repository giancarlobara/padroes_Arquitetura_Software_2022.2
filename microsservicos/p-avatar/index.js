const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/p-avatar", (req, res) =>
  res.sendFile("./index.html", { root: __dirname })
);

app.listen(3002, () => console.log(`Users API listening on port 3002!`));
