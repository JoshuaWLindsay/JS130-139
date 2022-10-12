"use strict";

class Octal {
  constructor(numString) {
    this.numString = Number(numString) ? numString : '';
  }

  toDecimal() {
    let numArray = this.numString.split('').map(digit => Number(digit));
    if (this.numString === '') return 0;
    if (numArray.includes(8) || numArray.includes(9)) return 0;
    let octal = 0;
    let placeValue;
    let exponent = 0;
    while (numArray.length > 0) {
      placeValue = numArray.pop();
      octal += placeValue * 8 ** exponent; 
      exponent++;
    }
    return octal;
  }
}

module.exports = Octal;