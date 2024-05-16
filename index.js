function showName() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);

  // 它是可遍历的
  // for(let arg of arguments) alert(arg);
}

// 依次显示：2，Julius，Caesar
showName('Julius', 'Caesar');

// 依次显示：1，Ilya，undefined（没有第二个参数）
showName('Ilya');

/* 
在过去，JavaScript 中不支持 rest 参数语法，而使用 arguments 是获取函数所有参数的唯一方法。现在它仍然有效，我们可以在一些老代码里找到它。

但缺点是，尽管 arguments 是一个类数组，也是可迭代对象，但它终究不是数组。它不支持数组方法，因此我们不能调用 arguments.map(...) 等方法。

此外，它始终包含所有参数，我们不能像使用 rest 参数那样只截取参数的一部分。

因此，当我们需要这些功能时，最好使用 rest 参数。


箭头函数没有自身的 this。现在我们知道了它们也没有特殊的 arguments 对象
*/
