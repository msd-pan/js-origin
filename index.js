let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms);

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
alert(date);

/* Date.parse(str) 方法可以从一个字符串中读取日期。

字符串的格式应该为：YYYY-MM-DDTHH:mm:ss.sssZ */
