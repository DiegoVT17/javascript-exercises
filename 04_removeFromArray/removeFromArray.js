const removeFromArray = function (arrNum, ...args) {
  return arrNum.filter((num) => !args.includes(num))
}
// Do not edit below this line
module.exports = removeFromArray
