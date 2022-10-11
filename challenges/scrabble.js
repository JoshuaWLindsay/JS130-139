class Scrabble {
  constructor(word) {
    word = word ? word : '';
    this.wordArray = word.trim().toUpperCase().split('');
  }

  value(char) {
    if ('AEIOULNRST'.includes(char)) {
      return 1;
    } else if ('DG'.includes(char)) {
      return 2;
    } else if ('BCMP'.includes(char)) {
      return 3;
    } else if ('FHVWY'.includes(char)) {
      return 4;
    } else if ('K'.includes(char)) {
      return 5;
    } else if ('JX'.includes(char)) {
      return 8;
    } else if ('QZ'.includes(char)) {
      return 10;
    } else {
      return 0;
    }
  }

  score() {
    return this.wordArray.map(this.value).reduce((a, b) => a + b, 0);
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;