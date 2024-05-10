let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries());
// 创建一个普通对象(plain object)

// 完成了
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange);

// Object.fromEntries 方法的作用是相反的：给定一个具有 [key, value] 键值对的数组，它会根据给定数组创建一个对象：
