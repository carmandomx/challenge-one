/*
Given the below paragraph create a function that returns a list
of unique words that starts with the same letters provided with an array of strings.
ex challengeOne(["a", "s", "p"])


Betty Botter had some butter, But, she said, this butters bitter. 
If I bake this bitter butter, it would make my batter bitter.
But a bit of better butterthat would make my batter better.
So she bought a bit of butter, better than her bitter butter,
and she baked it in her batter, and the batter was not bitter. 
So twas better Betty Botterbought a bit of better butter.

interface Answer {
    letter: string[]
}
ex. {
    a: ["a"],
    s: ["So", "She"]
}

*/

// DO NOT CHANGE THE TEXT
const text = `Betty Botter had some butter, But, she said, this butters bitter. 
If I bake this bitter butter, it would make my batter bitter. 
But a bit of better butter that would make my batter better. 
So she bought a bit of butter, better than her bitter butter, 
and she baked it in her batter, and the batter was not bitter. 
So twas better Betty Botterbought a bit of better butter.`;

/** DO NOT CHANGE THE FUNCTION NAME **/
const challengeOne = (letters) => {
  /* Only make changes below this comment */
  const words = text.replace(/[.,]/g, "").split(/\s+/);

  const uniqueWords = words.filter(
    (word, index, self) => self.indexOf(word) === index
  );
  const answer = {};

  letters.forEach((letter) => {
    answer[letter] = uniqueWords.filter(
      (word) => word[0].toLowerCase() === letter.toLowerCase()
    );
  });

  return answer;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
