function getMinor(a, b) {
  return Math.min(a, b);
}

let a = +prompt('a?', '');
let b = +prompt('b?', '');
// getMinor(a, b);
alert(getMinor(a, b));