function maxNum(num1, num2, num3) {
  let arr = [num1, num2, num3];
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - arr[i + 1];
    if (diff < 0) {
      arr[i] = 0;
    }
    if (arr[i] > 0) {
      return arr[i];
    }
  }
}
