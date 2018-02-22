/**
* @private Converts a hexadecimal to a decimal
*
* @param {string} hexadecimal
*
* @returns {integer}
*/
function _hexadecimalToDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16);
}

/**
* @private Converts a decimal to a hexadecimal
*
* @param {integer} decimal
*
* @returns {string}
*/
function _decimalToHexadecimal(decimal) {
  return decimal.toString(16);
}

/**
* @private Returns the substring that represents red on an hexadecimal color
*
* @param {string} color
*
* @returns {string}
*/
function _red(color) {
  return color.substring(0, 2);
}

/**
* @private Returns the substring that represents green on an hexadecimal color
*
* @param {string} color
*
* @returns {string}
*/
function _green(color) {
  return color.substring(2, 4);
}

/**
* @private Returns the substring that represents blue on an hexadecimal color
*
* @param {string} color
*
* @returns {string}
*/
function _blue(color) {
  return color.substring(4);
}

/**
* @private Returns the decimal average of two hexadecimals
*
* @param {string} a
* @param {string} b
*
* @returns {integer}
*/
function _averageHexadecimal(a, b) {
  return Math.round((_hexadecimalToDecimal(a) + _hexadecimalToDecimal(b)) / 2);
}

/**
* @private Returns the average color between two hexadecimal colors
*
* @param {string} firstColor
* @param {string} lastColor
*
* @returns {string}
*/
function averageColor(firstColor, lastColor) {
  let redAverage = _averageHexadecimal(_red(firstColor), _red(lastColor));
  let greenAverage = _averageHexadecimal(_green(firstColor), _green(lastColor));
  let blueAverage = _averageHexadecimal(_blue(firstColor), _blue(lastColor));

  return _decimalToHexadecimal(redAverage) + _decimalToHexadecimal(greenAverage) + _decimalToHexadecimal(blueAverage);
}
