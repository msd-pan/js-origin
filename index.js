let str = 'hello';

// 和for..of做同样的事
// for (let char of str)  alert(char)
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); //一个接一个的输出字符
}
