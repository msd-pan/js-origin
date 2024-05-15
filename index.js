let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert(schedule.meetups[1].date.getDate());

/* 
meetup.date 的值是一个字符串，而不是 Date 对象。JSON.parse 怎么知道应该将字符串转换为 Date 呢？

让我们将 reviver 函数传递给 JSON.parse 作为第二个参数，该函数按照“原样”返回所有值，但是 date 会变成 Date
*/
