let map = new Map();

map.set('1', 'str1'); //字符串键
map.set(1, 'num1'); //数字键
map.set(true, 'bool1'); //布尔值键

// 普通的Object对象会将键转化为字符串
// Map则会保留键的类型，所以下面这两个结果不同：
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.size); // 3

//Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。
