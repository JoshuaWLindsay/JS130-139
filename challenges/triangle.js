"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this.lengths = [side1, side2, side3].sort((a, b) => a - b);

    if (this.lengths[0] <= 0) {
      throw new Error(`Side lengths less than or equal to 0 are illegal.`);
    } else if (this.lengths[2] >= (this.lengths[0] + this.lengths[1])) {
      throw new Error(`Triangles violating triangle inequality are illegal`);
    }
  }

  kind() {
    if (this.lengths.every(length => length === this.lengths[0])) {
      return `equilateral`;
    } else if (this.lengths[0] !== this.lengths[1] && 
               this.lengths[1] !== this.lengths[2]) {
      return `scalene`;
    } else {
      return `isosceles`;
    }
  }
};

// let isosceles = new Triangle(2, 2, 3);
// console.log(isosceles.kind());

// let scalene = new Triangle(2, 3, 4);
// console.log(scalene.kind());

// let equilateral = new Triangle(2, 2, 2);
// console.log(equilateral.kind());

// let notATriangle = new Triangle(1, 1, 2);
// let notATriangle2 = new Triangle(0, 1, 2);
// let notATriangle3 = new Triangle(-1, 1, 2);


module.exports = Triangle;