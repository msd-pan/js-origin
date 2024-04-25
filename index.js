let ucFirst = (str) => {
  if (!str) return str;
  str = str[0].toUpperCase() + str.slice(1);
  alert(str);
};

ucFirst('like');

/* 解释
在js中字符串是不可变的，所以我们可以根据已有字符串创建一个首字母大写的新字符串。
同时，如股票str是空的，那么str[0]就是undefined，但由于undefined并没有toUpperCase()方法，因此会得到一个错误。所以当检测到为空字符串时，返回空字符串
*/
