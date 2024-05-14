let start = Date.now(); // 从 1 Jan 1970 至今的时间戳

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // 完成时刻

alert(`The loop took ${end - start} ms`); // 相减的是时间戳，而不是日期

/*  
关于时间戳是什么

时间戳（Timestamp）是指记录某一特定事件发生的精确时间的数值。它通常以日期和时间的形式表示，用于标记数据的时间属性。时间戳在计算机科学、数据库管理、网络通信等多个领域中被广泛使用。

这里的例子中的时间戳的形式是：UNIX时间戳（自1970年1月1日以来的秒数，如：1672531200）
*/
