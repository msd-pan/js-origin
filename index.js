let random = (min, max) => {
  let ranNum;
  do {
    ranNum = (max - min) * Math.random() + min;
  } while (ranNum >= max || ranNum < min);
  return ranNum;
};

/* 我们需要将区间0到1中的所有值“映射”为范围在min到max中的值。
    可以分为两个阶段完成：
    1：如果我们将0到1的随机数乘以max-min，则随机数的范围将从0到1增加到0到max-min
    2：现在，如果我们将随机数与min相加，则随机数的范围将为min到max。
*/

/* 答案函数实现
function random(min, max) {
  return;
  min + Math.random() * (max - min);
} */
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
