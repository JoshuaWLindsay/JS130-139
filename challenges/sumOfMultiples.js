"use strict";

class SumOfMultiples {
  constructor(...args) {
    this.set = (args.length === 0) ? [3, 5] : args;
  }

  to(limit) {
    let multiples = [];

    this.set.forEach(number => {
      let multiple = number;
      while (multiple < limit) {
        if (!multiples.includes(multiple)) {
          multiples.push(multiple);
        }
        multiple += number;
      }
    }, this);

    return multiples.reduce((a, b) => a + b, 0);
  }

  static to(limit) {
    return new SumOfMultiples().to(limit);
  }
}

module.exports = SumOfMultiples;