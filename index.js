/* 慢的解决方案

计算所有可能的子集的和
最简单的方法就是获取每个元素然后计算从它开始所有子数组的和

该方案的时间复杂度是O(n^2)，如果我们把数组大小增加2倍，那么算法的运行时间将会延长4倍。
对于大型数组（1000，10000或者更多项）这种算法会导致严重的时间消耗。
*/

// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }

/* 快的解决方案 

遍历数组，将当前局部元素的和保存在变量s中。如果s在某一点变成负数了，就重新分配s=0.所有s中的最大值就是答案。

该算法只需遍历1轮数组，所以时间复杂度是O(n)
*/

let getMaxSubSum = (arr) => {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
};

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
