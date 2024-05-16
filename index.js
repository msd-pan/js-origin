let arr = [1, 2, 3];

let arrCopy = [...arr]; // 将数组spread到参数列表中，然后结果放到一个新数组中

// 判断两个数组中的内容相同吗，相同
alert(JSON.stringify(arr) === JSON.stringify(arrCopy));

// 判断两个数组相等吗？ 不相等
alert(arr === arrCopy); // 两个数组的引用是不同的，故不相等

// 修改我们初始的数组不会修改副本
arr.push(4);
alert(arr); // 1，2，3，4
alert(arrCopy); // 1，2，3

let obj = { a: 1, b: 3, c: 4 };

let objCopy = { ...obj };

alert(JSON.stringify(obj) === JSON.stringify(objCopy));

alert(obj === objCopy);

// 修改我们初始的对象不会修改副本：
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

/*  
使用 spread 语法可以进行浅拷贝

这种方式比使用 let arrCopy = Object.assign([], arr) 复制数组，或使用 let objCopy = Object.assign({}, obj) 复制对象来说更为简便。因此，只要情况允许，我们倾向于使用它。
*/
