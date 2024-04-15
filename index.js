let menu = { width: 200, height: 300, title: 'my menu' };

let multiplyNumberic = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
    alert(obj[key]);
  }
};
multiplyNumberic(menu);
