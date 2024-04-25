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
