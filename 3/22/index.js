let browser;

if (browser === 'Edge') {
  alert('You have got the Edge!');
} else if (
  browser === 'Chrome' ||
  browser === 'Firefox' ||
  browser === 'Safari' ||
  browser === 'Opera'
) {
  alert('Okay we support that too');
} else {
  alert('We hope that this page looks ok!');
}
