let today = new Date();

today.setHours(0);
alert(today); // 日期仍然是今天，但是只是小时数被改成了0

today.setHours(0, 0, 0, 0);
alert(today); // 日期仍然是今天，时间为 00:00:00
