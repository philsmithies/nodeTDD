function duplicateEncoder(word) {
  let inputWord = word.split("");

  for (i = 0; i < inputWord.length; i++) {
    for (j = i + 1; j < inputWord.length; j++) {
      if (inputWord[j] === inputWord[i]) {
        inputWord[i] = ")";
        inputWord[j] = ")";
      }
    }
  }

  return inputWord;
}

console.log("duplicate is ", duplicateEncoder("dssins"));
