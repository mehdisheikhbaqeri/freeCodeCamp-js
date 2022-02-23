function mutation(arr) {
  let lower = arr[1].toLowerCase();
  let lower2 = arr[0].toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (lower2.indexOf(lower[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
