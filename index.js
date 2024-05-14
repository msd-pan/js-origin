let getDateAgo = (date, days) => {
  let tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + days);
  return tempDate;
};

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

/*   尝试解答时的错误

let tempDate = date;  函数中的 tempDate 只是对 date 的引用，并不是一个新的对象。所以当你修改 tempDate 时，实际上是在修改 date。对象部分的知识

return tempDate.setDate(tempDate.getDate() + days);
这样写的话返回的是时间戳而不是tempDate本身。因为setDate 方法返回的是更新后的时间的时间戳，而不是 Date 对象
 */

/*   答案解释

思路很简单：从 date 中减去给定的天数：
……但是函数不能修改 date。这一点很重要，因为我们提供日期的外部代码不希望它被修改。

要实现这一点，我们可以复制这个日期，就像这样：
*/
