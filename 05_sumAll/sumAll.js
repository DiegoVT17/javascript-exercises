const sumAll = function (a, b) {
  const sumArr = []

  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR"
  } else if (a > b) {
    const temp = a // temp variable
    a = b
    b = temp
  }

  for (let i = a; i <= b; i++) {
    sumArr.push(i)
  }

  return sumArr.reduce((acc, current) => acc + current, 0)
}

// Do not edit below this line
module.exports = sumAll
