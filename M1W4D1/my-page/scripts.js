class Clock {
  constructor() {
    this.time = 0;
  }

  tickRegular() {
    console.log(this);
    this.time += 1;
    console.log(this.time);
  };

}

const clockA = new Clock();

setInterval(clockA.tickRegular, 1000); //
