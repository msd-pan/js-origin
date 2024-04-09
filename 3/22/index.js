let userName = prompt('who"s there?', '');

if (userName == 'Admin') {
  let password = prompt('Password?', '');
  if (password == 'TheMaster') {
    alert('Welcome!');
  } else if (password == null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }
} else if (userName == null) {
  alert('Canceled');
} else {
  alert('I do not know you');
}
