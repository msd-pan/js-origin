// 自己尝试

// let a, b, sum, mul;

// let calculator = {
//   read() {
//     this.a = +prompt('a?', '');
//     this.b = +prompt('b?', '');
//   },
//   sum() {
//     for (let key in this) {
//       sum += this[key];
//     }
//     return alert(sum);
//   },
//   mul() {
//     return alert(this.a * this.b);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 答案
let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
