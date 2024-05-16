let showName = (firstName, lastName, ...titles) => {
  alert(firstName + '' + lastName);

  // 剩余的参数将被放入titles数组中
  alert(titles[0]);
  alert(titles[1]);
  alert(titles.length);
};

showName('Julius', 'Caesar', 'Consul', 'Imperator');

/* 我们也可以选择将第一个参数获取为变量，并将剩余的参数收集起来。

下面的例子把前两个参数获取为变量，并把剩余的参数收集到 titles 数组中： */
