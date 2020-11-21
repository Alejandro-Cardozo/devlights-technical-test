// This function find the similarity of a suffix
function zFunction(compoundString, idx) {
  let count = 0,
    inx1 = 0,
    inx2 = idx;
  while (
    compoundString.charAt(inx1) === compoundString.charAt(inx2) &&
    inx1 < compoundString.length
  ) {
    count++;
    inx1++;
    inx2++;
  }
  return count;
}

module.exports = zFunction;
