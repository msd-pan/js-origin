let sumAll = (...args) => {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
};

alert(sumAll(1));
alert(sumAll(1, 2));
alert(sumAll(1, 2, 3));

/* 我们可以在函数定义中声明一个数组来收集参数。语法是这样的：...变量名，这将会声明一个数组并指定其名称，其中存有剩余的参数。这三个点的语义就是“收集剩余的参数并存进指定数组中”。

例如，我们需要把所有的参数都放到数组 args 中： */
