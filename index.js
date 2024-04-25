let checkSpam = (str) => {
  if (
    str.toLowerCase().indexOf('viagra') != -1 ||
    str.toLowerCase().indexOf('xxx') != -1
  ) {
    return true;
  } else return false;
};

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));

// 为了使搜索不区分大小写，我们可以将字符串统一改为小写，之后进行检测
