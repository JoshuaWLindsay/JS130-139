class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  isAnagram(string) {
    let sortedWord = this.word.split('').sort().join('');
    let sortedString = string.toLowerCase().split('').sort().join('');
    
    if (string.length !== this.word.length ||
        this.word === string.toLowerCase()) {
      return false;
    };

    if (sortedWord === sortedString) return true;
  }

  match(array) {
    return array.filter(this.isAnagram, this);
  } 
}

module.exports = Anagram;