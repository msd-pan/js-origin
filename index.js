function Calculator() {
  this.read = function () {
    let a = +prompt('a?', 0);
    let b = +prompt('b?', 0);
    this.a = a;
    this.b = b;
    // 给对象赋属性可以用以下语句
    // this.a = +prompt('a?', 0);
    // this.b = +prompt('b?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());
