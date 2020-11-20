const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

// settings
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));

//listening
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
