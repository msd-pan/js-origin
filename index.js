// alert((6.35).toFixed(20));
// 这样能看到6.35在内部是如何存储的，其小数部分是一个无限的二进制。故此时存储会造成精度损失。6.34999999999999964473
// 精度损失可能会导致数字的增加和减小。在这种特殊情况下，数字变小了一点就是向下舍入的原因。

// 而对于1.35
// alert((1.35).toFixed(20)); //1.35000000000000008882
// 精度损失使得这个数字稍微大了一些，所以向上舍入

// 为了使其正确的舍入，可以使其更接近整数：
// alert((6.35 * 10).toFixed(20));

// 之后使用Math.round对其正确舍入
alert(Math.round(6.35 * 10) / 10);
