"use strict";

class CustomSet {
  constructor(array = []) {
    this.array = array.sort();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  length() {
    return this.array.length;
  }

  add(value) {
    if (!this.contains(value)) {
      this.array.push(value);
      this.array.sort();  
    }
    return this;
  }

  contains(value) {
    return this.array.includes(value);
  }

  isSubset(superSet) {
    if (this.length() === 0 && superSet instanceof CustomSet) {
      return true;
    }
    for (let index = 0; index < this.length(); index++) {
      if (!superSet.contains(this.array[index])) return false;
    }
    return true;
  }

  isDisjoint(otherSet) {
    for (let index = 0; index < this.length(); index++) {
      if (otherSet.contains(this.array[index])) return false;
    }
    return true;
  }

  isSame(otherSet) {
    if (this.length() === otherSet.length()) {
      for (let index = 0; index < this.length(); index++) {
        if (this.array[index] !== otherSet.array[index]) {
          return false;
        }
      }
    } else return false;
    return true;
  }

  intersection(otherSet) {
    let intersection = [];

    otherSet.array.forEach(value => {
      if (this.contains(value)) {
        intersection.push(value);
      }
    });

    return new CustomSet(intersection);
  }

  difference(otherSet) {
    let difference = [];

    this.array.forEach(value => {
      if (!otherSet.contains(value)) {
        difference.push(value);
      }
    });

    return new CustomSet(difference);
  }

  union(otherSet) {
    let union = new CustomSet(this.array);

    otherSet.array.forEach(value => {
      union.add(value);
    });

    return union;

  }
}

// let custom = new CustomSet([1, 2, 3]);

// console.log(custom.isSubset(new CustomSet([4, 1, 2, 3])));
// console.log(custom.isDisjoint(new CustomSet([4])));
// console.log(custom.isSame(new CustomSet([2, 3, 1])));
// console.log(custom.intersection(new CustomSet([4, 5, 1])).array);
// console.log(custom.difference(new CustomSet([2, 4])).array);
// console.log(custom.union(new CustomSet([4, 5, 1])).array);

module.exports = CustomSet;