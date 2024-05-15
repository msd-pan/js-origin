let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

let json = JSON.stringify(student);

alert(typeof json);

alert(json);

/* 在JavaScript中，JSON（JavaScript Object Notation）格式确实是字符串格式。

JSON是一种轻量级的数据交换格式，易于人类读取和编写，也易于机器解析和生成。它的基本结构是由键值对组成的对象和有序列表组成的数组，符合JavaScript对象表示的语法，但JSON是以字符串的形式存在的。 */

/* JSON.stringify 将对象转换为 JSON。
JSON.parse 将 JSON 转换回对象。 */
