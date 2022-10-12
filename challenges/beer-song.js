"use strict";

class BeerSong {
  static verse(num) {
    let song = '';
    if (num === 2) {
      song += `2 bottles of beer on the wall, 2 bottles of beer.\n`;
      num--;
      song += `Take one down and pass it around, 1 bottle of beer on the wall.\n`;  
    } else if (num === 1) {
      song += `1 bottle of beer on the wall, 1 bottle of beer.\n`;
      num--;
      song += `Take it down and pass it around, no more bottles of beer on the wall.\n`;  
    } else if (num === 0) {
      song += `No more bottles of beer on the wall, no more bottles of beer.\n`;
      song += `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else {
      song += `${num} bottles of beer on the wall, ${num} bottles of beer.\n`;
      num--;
      song += `Take one down and pass it around, ${num} bottles of beer on the wall.\n`;  
    }

    return song;
  }

  static verses(beg, end) {
    let verseNum = beg;
    let song = '';
    while (verseNum >= end) {
      song += BeerSong.verse(verseNum);
      if (verseNum > end) song += '\n';
      verseNum--;
    }
    return song;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;