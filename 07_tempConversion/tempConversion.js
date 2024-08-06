const convertToCelsius = function (degrees) {
  const conversion = (degrees - 32) * (5 / 9)

  if (!Number.isInteger(conversion)) {
    return Number(Number.parseFloat(conversion).toFixed(1))
  }

  return conversion
}

const convertToFahrenheit = function (degrees) {
  // (32 °C × 9/5) + 32 = 89.6 °F
  const conversion = degrees * (9 / 5) + 32

  if (!Number.isInteger(conversion)) {
    return Number(Number.parseFloat(conversion).toFixed(1))
  }

  return conversion
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
}
