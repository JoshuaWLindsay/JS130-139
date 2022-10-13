"use strict";

class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(minutes) {
    let { hour, minute } = this;
    minute += minutes;
    while (minute > 60) {
      minute -= 60;
      hour += 1;
      if (hour === 24) hour -= 24;
    }
    return new Clock(hour, minute);
  }

  subtract(minutes) {
    let { hour, minute } = this;
    minute -= minutes;
    while (minute < 0) {
      minute += 60;
      hour -= 1;
      if (hour === -1) hour += 24;
    }
    return new Clock(hour, minute);
  }

  toString() {
    let hour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
    let minute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
    return `${hour}:${minute}`;
  }

  isEqual(clock) {
    return this.toString() === clock.toString();
  }
}

module.exports = Clock;