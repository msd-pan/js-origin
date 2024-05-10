let obj = {
  name: 'john',
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get('name'));

/* 如果我们想从一个已有的普通对象（plain object）来创建一个 Map，那么我们可以使用内建方法 Object.entries(obj)，该方法返回对象的键/值对数组，该数组格式完全按照 Map 所需的格式。

这里，Object.entries 返回键/值对数组：[ ["name","John"], ["age", 30] ]。这就是 Map 所需要的格式。
 */
