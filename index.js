let diffSubtract = (date1, date2) => date2 - date1;
let diffGetTime = (date1, date2) => date2.getTime() - date1.getTime();

let bench = (f) => {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
};

alert(`Time of diffSubtract: ` + bench(diffSubtract) + 'ms');
alert(`Time of diffGetTime: ` + bench(diffGetTime) + 'ms');

/* 
看起来使用 getTime() 这种方式快得多，这是因为它没有进行类型转换，对引擎优化来说更加简单。

我们得到了结论，但是这并不是一个很好的度量的例子。

想象一下当运行 bench(diffSubtract) 的同时，CPU 还在并行处理其他事务，并且这也会占用资源。然而，运行 bench(diffGetTime) 的时候，并行处理的事务完成了。

对于现代多进程操作系统来说，这是一个非常常见的场景。

比起第二个函数，第一个函数所能使用的 CPU 资源更少。这可能导致错误的结论。

为了得到更加可靠的度量，整个度量测试包应该重新运行多次。
*/
