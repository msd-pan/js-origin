let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, 4, -2];

let merged = [0, ...arr1, 1, ...arr2];

alert(Math.max(1, ...arr1, 2, ...arr2, 25));

let str = 'Hello';

alert([...str]);

/* 不过 Array.from(obj) 和 [...obj] 存在一个细微的差别：

Array.from 适用于类数组对象也适用于可迭代对象。
Spread 语法只适用于可迭代对象。
因此，对于将一些“东西”转换为数组的任务，Array.from 往往更通用。 */

/* Spread 语法内部使用了迭代器来收集元素，与 for..of 的方式相同。它看起来和 rest 参数很像，也使用 ...，但是二者的用途完全相反。

当在函数调用中使用 ...arr 时，它会把可迭代对象 arr “展开”到参数列表中。 */
