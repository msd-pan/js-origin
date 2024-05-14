let getWeekDay = (date) => {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
};

let date = new Date(2014, 0, 3);
alert(getWeekDay(date));

/* getDay()
获取一周中的第几天，从 0（星期日）到 6（星期六）。第一天始终是星期日，在某些国家可能不是这样的习惯，但是这不能被改变。 */
