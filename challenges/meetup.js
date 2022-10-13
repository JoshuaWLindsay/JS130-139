"use strict";

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    const WEEKDAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let day = WEEKDAY.indexOf(weekday.toLowerCase());
    let firstDay = new Date(this.year, this.month - 1).getDay();
    let date;

    let firstWeek = [1, 2, 3, 4, 5, 6, 7];
    for (let start = 0; start < firstDay; start++) {
      firstWeek.unshift(firstWeek.pop());
    }

    let lastWeek = firstWeek.map(day => day + 21);
    if ((new Date(this.year, this.month, 0)).getDate() === 31) {
      lastWeek = lastWeek.map(day => {
        if (day < 25) return day + 7;
        else return day;
      });
    } else if ((new Date(this.year, this.month, 0)).getDate() === 30) {
      lastWeek = lastWeek.map(day => {
        if (day < 24) return day + 7;
        else return day;
      });
    } else if (this.month === 2 && (new Date(this.year, this.month, 0)).getDate() === 29) {
      lastWeek = lastWeek.map(day => {
        if (day < 23) return day + 7;
        else return day;
      });
    }

    let teenthWeek1 = firstWeek.map(day => day + 7);
    let teenthWeek2 = firstWeek.map(day => day + 14);

    if (schedule.toLowerCase() === 'first') {
      date = firstWeek[day];
    } else if (schedule.toLowerCase() === 'second') {
      date = firstWeek[day] + 7;
    } else if (schedule.toLowerCase() === 'third') {
      date = firstWeek[day] + 14;
    } else if (schedule.toLowerCase() === 'fourth') {
      date = firstWeek[day] + 21;
    } else if (schedule.toLowerCase() === 'fifth') {
      date = lastWeek[day];
      if (date < 29) return null;
    } else if (schedule.toLowerCase() === 'last') {
      date = lastWeek[day];
    } else if (schedule.toLowerCase() === 'teenth') {
      let teenth = [13, 14, 15, 16, 17, 18, 19];
      if (teenth.includes(teenthWeek1[day])) date = teenthWeek1[day];
      else if (teenth.includes(teenthWeek2[day])) date = teenthWeek2[day];
    } 

    return new Date(this.year, this.month - 1, date);
  }
}

module.exports = Meetup;