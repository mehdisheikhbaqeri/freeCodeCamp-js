function getIndexToIns(arr, num) {
  return arr.filter((get) => num > get).length;
}

getIndexToIns([40, 60], 50);
