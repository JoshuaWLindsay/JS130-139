"use strict";

class Series {
  constructor(strDigits) {
    this.digitsArray = strDigits.split('').map(num => Number(num));
  }

  slices(digits) {
    if (digits > this.digitsArray.length) {
      throw new Error(`Passed more digits that in original sequence.`);
    }

    let sequences = [];

    for (let index = 0; index <= (this.digitsArray.length - digits); index++) {
      sequences.push(this.digitsArray.slice(index, (index + digits)));
    }

    return sequences;
  }
}

module.exports = Series;