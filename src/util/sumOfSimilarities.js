const zFunction = require("../util/zFunction");
function sumOfSimilarities(inputString) {
  let total = 0;
  for (let i = 0; i < inputString.length; i++) {
    let compoundString = `${inputString.substr(
      i,
      inputString.length
    )}#${inputString}`;
    total = total + zFunction(compoundString);
  }
  return total;
}

module.exports = sumOfSimilarities;
