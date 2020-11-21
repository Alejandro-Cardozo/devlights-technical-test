const zFunction = require("../util/zFunction");
// This function accumulates the value of each similarity
function sumOfSimilarities(inputString) {
  let total = 0;
  for (let i = 0; i < inputString.length; i++) {
    total = total + zFunction(inputString, inputString.length - i - 1);
  }
  return total;
}

module.exports = sumOfSimilarities;
