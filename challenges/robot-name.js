"use strict";

const seedrandom = require('seedrandom');
const rng = seedrandom(/^[A-Z]{2}\d{3}$/);
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DIGITS = '1234567890';

class Robot {
  static nameCollection = [];

  constructor() {
    this.me;
  }

  newName() {
    let newName = ALPHABET[Math.floor(rng() * 26)];
    newName += ALPHABET[Math.floor(rng() * 26)];
    newName += DIGITS[Math.floor(rng() * 10)];
    newName += DIGITS[Math.floor(rng() * 10)];
    newName += DIGITS[Math.floor(rng() * 10)];

    if (Robot.nameCollection.includes(newName)) {
      return this.newName();
    } else {
      Robot.nameCollection.push(newName);
      this.me = newName;
    }
  }

  name() {
    if (!this.me) {
      this.newName();
    }

    return this.me;
  }

  reset() {
    let index = Robot.nameCollection.indexOf(this.me);
    Robot.nameCollection.splice(index, 1);
    this.me = undefined;
  }
}

module.exports = Robot;