// 自己作成


// function A() {
//   this.name = 'A';
// }
// function B() {
//   this.name = 'A';
// }

// alert(new A() == new B());

// 答案

let obj={}
function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B());