let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'JAck', salary: 1300 }],
  },
};

// 用来完成任务的函数，求和函数
let sumSalaries = (department) => {
  if (Array.isArray(department)) {
    //判断是否为数组的方法，返回布尔值
    return department.reduce((prev, current) => prev + current.salary, 0); // 遍历数组时使用的arr.reduce 方法（https://zh.javascript.info/array-methods）
  } else {
    let sum = 0;
    for (let subep of Object.values(department)) {
      sum += sumSalaries(subep);
    }
    return sum;
  }
};

alert(sumSalaries(company));
