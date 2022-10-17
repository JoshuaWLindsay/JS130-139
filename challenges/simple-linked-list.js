"use strict";

// // Using an array as my data structure

// class SimpleLinkedList {
//   constructor() {
//     this.linkedList = [];
//   }

//   size() {
//     return this.linkedList.length;
//   }

//   peek() {
//     if (this.size() > 0) {
//       return this.head().datum();
//     } else return null;
//   }

//   isEmpty() {
//     if (this.size() === 0) return true;
//     else return false;
//   }

//   push(element) {
//     let newLink = new Element(element, this.head());

//     this.linkedList.push(newLink);
//   }

//   head() {
//     if (this.size() === 0) return null;
//     return this.linkedList[this.size() - 1];
//   }

//   tail() {
//     if (this.size() === 0) return null;
//     return this.linkedList[0];
//   }

//   pop() {
//     if (this.size() === 0) return null;
//     return this.linkedList.pop().datum();
//   }

//   static fromArray(array) {
//     array = array || [];

//     let LinkedList = new SimpleLinkedList();

//     for (let index = array.length - 1; index >= 0; index--) {
//       LinkedList.push(array[index]);
//     }

//     return LinkedList;
//   }

//   toArray() {
//     return this.linkedList.map(element => {
//       return element.datum();
//     }).reverse();
//   }

//   reverse() {
//     return SimpleLinkedList.fromArray(this.toArray().reverse());
//   }
// }

class SimpleLinkedList {
  constructor() {
    this.headElement = null;
  }

  size() {
    let count = 0;
    let current = this.head();
    while (current) {
      count++;
      current = current.next();
    }
    return count;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    let secondArg = this.head() || null;
    let newLink = new Element(datum, secondArg);
    this.headElement = newLink;
  }

  head() {
    return this.headElement || null;
  }

  // tail() {
  //   let current = this.head();
  //   while (current) {
  //     if (current.next()) {
  //       current = current.next();
  //     } else return current;
  //   }
  // }

  pop() {
    let previousHead = this.head();
    this.headElement = this.head().next();
    return previousHead.datum() || null;
  }

  static fromArray(array) {
    array = array || [];

    let LinkedList = new SimpleLinkedList();

    for (let index = array.length - 1; index >= 0; index--) {
      LinkedList.push(array[index]);
    }

    return LinkedList;
  }

  toArray() {
    let array = [];
    let current = this.head();
    while (current) {
      array.push(current.datum());
      current = current.next();
    }
    return array;
  }

  reverse() {
    let newList = new SimpleLinkedList();
    let current = this.head();
    while (current) {
      newList.push(current.datum());
      current = current.next();
    }
    return newList;
  }
}

class Element {
  constructor(value, nextElement) {
    this.value = value;
    this.nextElement = nextElement || null;
  }  

  datum() {
    return this.value;
  }

  isTail() {
    return !this.nextElement;
  }

  next() {
    return this.nextElement;
  }
}

module.exports = { SimpleLinkedList, Element };