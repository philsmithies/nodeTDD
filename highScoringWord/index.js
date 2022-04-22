function high(string) {
  const individualWords = string.split(" ");
  let highestScoringWord = "";
  let highScore = 0;
  let individualWordScore = 0;
  const updateScore = (word) => {
    for (letter of word) {
      individualWordScore += letter.charCodeAt(0) - 96;
    }
    if (individualWordScore > highScore) {
      highestScoringWord = word;
      highScore = individualWordScore;
    }
    individualWordScore = 0;
  };

  for (word of individualWords) {
    updateScore(word);
  }
  return highestScoringWord;
}

console.log("high is ", high("what time are we climbing up the volcano"));
