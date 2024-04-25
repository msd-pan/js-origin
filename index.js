let arr = [1, 2, 3, 4, 5];

// 使用of关键字的时候它用于迭代可迭代对象（例如数组），迭代的是数组的值
for (let i of arr) {
  alert(i);
}

// 使用of关键字的时候它用于迭代对象的属性，迭代的是数组的索引
for (let i in arr) {
  alert(i);
}
