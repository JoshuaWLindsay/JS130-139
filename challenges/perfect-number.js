"use strict";

class PerfectNumber {

  static aliquotSum(number) {
    let aliquotSum = 0;
    for (let divisor = 1; divisor < number; divisor++) {
      if (number % divisor === 0) aliquotSum += divisor;
    }
    return aliquotSum;
  }

  static classify(number) {
    let aliquotSum = this.aliquotSum(number);

    if (number < 1) {
      throw new Error(`Number must be a positive integer`);
    } else if (aliquotSum < number) {
      return 'deficient';
    } else if (aliquotSum === number) {
      return 'perfect';
    } else if (aliquotSum > number) {
      return 'abundant';
    }
  }
}

module.exports = PerfectNumber;