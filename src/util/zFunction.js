function zFunction(compoundString) {
  let count = 0,
    inx1 = 0,
    inx2 = compoundString.indexOf("#") + 1;
  while (compoundString.charAt(inx1) === compoundString.charAt(inx2)) {
    count++;
    inx1++;
    inx2++;
  }
  return count;
}

module.exports = zFunction;
