let readNumber;
do {
  readNumber = +prompt('enter a number', 0);
} while (isNaN(readNumber));
if (readNumber == '' || readNumber == null) {
  alert(null);
} else {
  alert(readNumber);
}
