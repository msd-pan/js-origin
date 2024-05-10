let set = new Set(['oranges', 'bananas', 'apples']);

for (let value of set) alert(value);

// 与forEach相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});

/*  我们可以使用 for..of 或 forEach 来遍历 Set：

注意一件有趣的事儿。forEach 的回调函数有三个参数：一个 value，然后是 同一个值 valueAgain，最后是目标对象。没错，同一个值在参数里出现了两次。

forEach 的回调函数有三个参数，是为了与 Map 兼容。当然，这看起来确实有些奇怪。但是这对在特定情况下轻松地用 Set 代替 Map 很有帮助，反之亦然。

Map 中用于迭代的方法在 Set 中也同样支持：

set.keys() —— 遍历并返回一个包含所有值的可迭代对象，
set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map，
set.entries() —— 遍历并返回一个包含所有的实体 [value, value] 的可迭代对象，它的存在也是为了兼容 Map。



*/
