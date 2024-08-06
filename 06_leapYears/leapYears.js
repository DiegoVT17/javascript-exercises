const leapYears = function (year) {
  // years divisible by 4
  // years divisible by 100 not leap unless divisible by 400

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }

  return false
}

// Do not edit below this line
module.exports = leapYears
