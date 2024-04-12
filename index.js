let salaries = { John: 100, Ann: 160, Pete: 130 };
let sum = 0;

let sumObj = (obj) => {
  for (let key in obj) {
    // alert(obj[key]);
    sum += obj[key];
  }
  alert(sum);
};
sumObj(salaries);
