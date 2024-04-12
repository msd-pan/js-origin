// 自己作成

// let isEmpty = (obj) => {
//   for (let key in obj) {
//     if (key in obj) {
//       return false;
//     } else return true;
//   }
// };
// let schedule = {};
// alert(isEmpty(schedule));

// schedule['8:30'] = 'get up';
// alert(isEmpty(schedule));

// answer
let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};
let schedule = {};
alert(isEmpty(schedule));

schedule['8:30'] = 'get up';
alert(isEmpty(schedule));
