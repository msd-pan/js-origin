// 自己做成，有错误

// let sumInput = () => {
//   let arr = [];
//   let total;
//   do {
//     let num;
//     num = prompt('enter a number?', 0);
//     if (num !== null && num !== '') {
//       // 检查用户是否取消输入
//       arr.push(Number(num)); // 将输入值转换为数字类型
//     }
//   } while (num !== null && num !== '');
//   for (let num of arr) {
//     total += num;
//   }
//   return total;
// };

// 答案
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt('A number please?', 0);
    // 应该结束了吗？
    if (value === '' || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
