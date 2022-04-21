function oddInt(array) {
  let oddResult = 0;
  for (i = 0; i < array.length; i++) {
    array.filter((x) => x == array[i]).length % 2 !== 0
      ? (oddResult = array[i])
      : "";
  }
  return oddResult;
}

console.log(oddInt([1, 2, 2, 3, 3, 3, 1]));
