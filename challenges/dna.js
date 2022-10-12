"use strict";

class DNA {
  constructor(sequence) {
    this.strand = sequence;
  }

  hammingDistance(sequence) {
    let shorterLength = Math.min(this.strand.length, sequence.length);
    let distance = 0;

    for (let index = 0; index < shorterLength; index++) {
      if (this.strand[index] !== sequence[index]) distance++;
    }

    return distance;
  }
}

module.exports = DNA;