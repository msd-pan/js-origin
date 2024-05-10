let john = { name: 'John' };

// 存储每个用户的来访次数
let visitsCountMap = new Map();

// john事Map中的键
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123
