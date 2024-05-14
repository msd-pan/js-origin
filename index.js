let date = new Date(Date.parse('2012-02-20T03:12:00'));
alert(date);

// 这是一个以数字作为日期参数的示例：
// new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);

// 我们还可以从字符串创建日期
// new Date(datestring)
let d2 = new Date('2012-02-20T03:12');
alert(d2);

/* new Date 构造函数默认使用本地时区。所以唯一需要牢记的就是月份从 0 开始计数。

所以二月对应的数值是 1。 */
