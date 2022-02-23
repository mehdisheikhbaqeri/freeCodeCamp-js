function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let myArr = arr2.slice();
  myArr.splice(n, 0, ...arr1);
  return myArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
