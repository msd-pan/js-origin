function checkAge(age) {
  return age > 18 ? true : confirm('Do you have your parents permission?');
}

function checkAge(age) {
  return age > 18 || confirm('Do you have your parents permission?');
}
