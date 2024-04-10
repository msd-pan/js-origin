let a = +prompt('a?', '');
// 这里这个加号是为了将输入的字符串类型的数字转为数字类型

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert(0);
    break;
}
