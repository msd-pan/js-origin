function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt('enter a number', 0);
  };
}

let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();

alert(accumulator.value);
