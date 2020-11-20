const sumOfSimilarities = require("../util/sumOfSimilarities");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { text: "" });
});

router.post("/", async (req, res) => {
  const text = req.body.text;
  const separation = text.split("\r\n");
  separation.shift();
  console.log(separation);
  const x = separation.map((value) => sumOfSimilarities(value.trim()));
  console.log(x);

  res.render("index", { text: x }); //ha
});

module.exports = router;
