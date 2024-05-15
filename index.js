let user = {
  name: 'John Smith',
  age: 35,
};

let newUser = JSON.parse(JSON.stringify(user));
alert(newUser);
