const sumOfSimilarities = require("../util/sumOfSimilarities");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { text: "" });
});

router.post("/", async (req, res) => {
  const text = req.body.text;
  try {
    if (text.indexOf("\r\n") === -1) {
      res.render("index", { text: "Invalid input" });
    }
    const separation = text.split("\r\n");
    console.log(separation);
    separation.shift();
    console.log(separation);
    const x = separation.map((value) => sumOfSimilarities(value.trim()));
    console.log(x);
    res.render("index", { text: x });
  } catch (err) {
    res.render("index", { text: "Invalid input" });
  }
});

module.exports = router;
