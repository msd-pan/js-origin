let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

//  Array.from 方法接受对象，检查它是一个可迭代对象或类数组对象，然后创建一个新数组，并将该对象的所有元素复制到这个新数组。
let arr = Array.from(arrayLike);
alert(arr.pop());
alert(arr.pop());

// Array.from 的完整语法
// Array.from(obj[, mapFn, thisArg])

// 可选的第二个参数 mapFn 可以是一个函数，该函数会在对象中的元素被添加到数组前，被应用于每个元素，此外 thisArg 允许我们为该函数设置 this。

// 求每个数的平方

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

let newArr = Array.from(range, (num) => num * num);

alert(newArr); // 1,4,9,16,25
