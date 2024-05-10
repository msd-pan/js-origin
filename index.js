let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// 遍历所有的键
for (let vegetable of recipeMap.keys()) {
  alert(vegetable);
}

// 遍历所有的值
for (let amount of recipeMap.values()) {
  alert(amount);
}

// 遍历所有的实体[key, value]
for (let entry of recipeMap.entries()) {
  // 与let entry of recipeMap相同
  alert(entry);
}

/* 如果要在 map 里使用循环，可以使用以下三个方法：

map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
map.values() —— 遍历并返回一个包含所有值的可迭代对象，
map.entries() —— 遍历并返回一个包含所有实体 [key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个。 */
