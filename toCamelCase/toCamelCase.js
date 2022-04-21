function toCamelCase(str) {
  let i = 0;
  let newStr = str.split("");
  while (i < newStr.length) {
    if (newStr[i] === "_" || newStr[i] === "-") {
      newStr[i + 1] = newStr[i + 1].toUpperCase();
      newStr.splice(i, 1);
    }
    i++;
  }
  return newStr.join("");
}

console.log("the case is ", toCamelCase("hi-there"));
