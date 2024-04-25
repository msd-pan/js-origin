let truncate = (str, maxLength) => {
  if (str.length > maxLength) {
    let newStr = str.slice(0, maxLength - 1) + '...';
    return newStr;
  } else {
    return str;
  }
};

alert(truncate('Hi Joshua!', 20));
alert(truncate('I miss you and want hug you when we meet!', 20));

// 省略号实际上有一个单独的Unicode字符，而不是三个点。
