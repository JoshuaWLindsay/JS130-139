"use strict";

// My Solution

class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  thousands() {
    const THOUSANDS = {
      1: 'M',
      2: 'MM',
      3: 'MMM'
    }

    if (this.number >= 1000) {
      return THOUSANDS[String(this.number)[0]];
    }
    return '';


    // if (this.number >= 1000 && this.number < 2000) {
    //   return 'M';
    // } else if (this.number >= 2000 && this.number < 3000) {
    //   return 'MM';
    // } else if (this.number >= 3000 && this.number < 4000) {
    //   return 'MMM';
    // }
  }

  hundreds() {
    const HUNDREDS = {
      0: '',
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM'
    }

    if (this.number >= 1000) {
      return HUNDREDS[String(this.number)[1]];
    } else if (this.number >= 100) {
      return HUNDREDS[String(this.number)[0]];
    }
    return '';
  }

  tens() {
    const TENS = {
      0: '',
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC'
    }

    if (this.number >= 1000) {
      return TENS[String(this.number)[2]];
    } else if (this.number >= 100) {
      return TENS[String(this.number)[1]];
    } else if (this.number >= 10) {
      return TENS[String(this.number)[0]];
    }
    return '';
  }

  ones() {
    const ONES = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX'
    }

    if (this.number >= 1000) {
      return ONES[String(this.number)[3]];
    } else if (this.number >= 100) {
      return ONES[String(this.number)[2]];
    } else if (this.number >= 10) {
      return ONES[String(this.number)[1]];
    } else if (this.number >= 1) {
      return ONES[String(this.number)[0]];
    }
    return '';
  }

  toRoman() {
    return this.thousands() + this.hundreds() + this.tens() + this.ones();
  }
}

// // Launch School's Solution

// class RomanNumeral {
//   static ROMAN_NUMERALS = {
//      M: 1000,
//     CM: 900,
//      D: 500,
//     CD: 400,
//      C: 100,
//     XC: 90,
//      L: 50,
//     XL: 40,
//      X: 10,
//     IX: 9,
//      V: 5,
//     IV: 4,
//      I: 1
//   }

//   constructor(number) {
//     this.number = number;
//   }

//   toRoman() {
//     let romanVersion = '';
//     let toConvert = this.number;

//     Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
//       let value = RomanNumeral.ROMAN_NUMERALS[numeral];
//       let multiplier = Math.floor(toConvert / value);
//       let remainder = toConvert % value;

//       if (multiplier > 0) {
//         romanVersion += (numeral.repeat(multiplier));
//       }

//       toConvert = remainder;
//     });

//     return romanVersion;
//   }
// }

// module.exports = RomanNumeral;

module.exports = RomanNumeral;