let room = { number: 23 };

let meetup = {
  title: 'Conference',
  date: new Date(Date.UTC(2017, 0, 1)),
  room,
};

alert(JSON.stringify(meetup));

/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

/* 像 toString 进行字符串转换，对象也可以提供 toJSON 方法来进行 JSON 转换。如果可用，JSON.stringify 会自动调用它。 

在这儿我们可以看到 date (1) 变成了一个字符串。这是因为所有日期都有一个内建的 toJSON 方法来返回这种类型的字符串。

现在让我们为对象 room 添加一个自定义的 toJSON：*/

let room1 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup1 = {
  title: 'Conference',
  room1,
};

alert(JSON.stringify(room1));

alert(JSON.stringify(meetup1));

/* 正如我们所看到的，toJSON 既可以用于直接调用 JSON.stringify(room) 也可以用于当 room 嵌套在另一个编码对象中时。 */
