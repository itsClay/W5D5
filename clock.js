'use strict';
class Clock {
  constructor() {
    let clock = new Date();
    this.hours = clock.getHours();
    this.minutes = clock.getMinutes();
    this.seconds = clock.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    process.stdout.clearLine();
    process.stdout.write(` ${this.hours}:${this.minutes}:${this.seconds}\r`);

  }

  _tick() {
    this.seconds++;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes > 59) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours > 23) {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    }

    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
