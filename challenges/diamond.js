"use strict";

class Diamond {
  static makeDiamond(letter) {
    if (letter === 'A') return 'A\n';

    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let endIndex = ALPHABET.indexOf(letter);

    let shape = ' '.repeat(endIndex) + 'A' + ' '.repeat(endIndex) + '\n';

    for (let index = 1; index < endIndex; index++) {
      shape += ' '.repeat(endIndex - index) + ALPHABET[index] + ' '.repeat(index * 2 - 1) +
               ALPHABET[index] + ' '.repeat(endIndex - index) + '\n';
    }

    shape += ALPHABET[endIndex] + ' '.repeat(endIndex * 2 - 1) + ALPHABET[endIndex] + '\n';

    for (let index = endIndex - 1; index > 0; index--) {
      shape += ' '.repeat(endIndex - index) + ALPHABET[index] + ' '.repeat(index * 2 - 1) +
               ALPHABET[index] + ' '.repeat(endIndex - index) + '\n';
    }

    shape += ' '.repeat(endIndex) + 'A' + ' '.repeat(endIndex) + '\n';

    return shape;
  }  
}

// console.log(Diamond.makeDiamond('A'));
// console.log(Diamond.makeDiamond('C'));
// console.log(Diamond.makeDiamond('E'));
// console.log(Diamond.makeDiamond('M'));

module.exports = Diamond;