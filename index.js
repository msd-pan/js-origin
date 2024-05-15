let userData = `{"name":"John","age":35,"isAdmin":false,"friends":[0,1,2,3]}`;

let user = JSON.parse(userData);

alert(user.friends[1]);

/* 要解码 JSON 字符串，我们需要另一个方法 JSON.parse。

语法：

let value = JSON.parse(str, [reviver]); 

str
要解析的 JSON 字符串。
reviver
可选的函数 function(key,value)，该函数将为每个 (key, value) 对调用，并可以对值进行转换*/


/* SON 可能会非常复杂，对象和数组可以包含其他对象和数组。但是它们必须遵循相同的 JSON 格式。

以下是手写 JSON 时的典型错误（有时我们必须出于调试目的编写它）：

let json = `{
  name: "John",                     // 错误：属性名没有双引号
  "surname": 'Smith',               // 错误：值使用的是单引号（必须使用双引号）
  'isAdmin': false                  // 错误：键使用的是单引号（必须使用双引号）
  "birthday": new Date(2000, 2, 3), // 错误：不允许使用 "new"，只能是裸值
  "friends": [0,1,2,3]              // 这个没问题
}`;
*/