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

  let splittedText = text.split(/\W+/);
  let resultingWords = {};
  const options = letters.map((letter) => [
    letter.toUpperCase(),
    letter.toLowerCase(),
  ]);

  options.forEach((option, index) => {
    splittedText.forEach((word) => {
      if (word.startsWith(option[0]) || word.startsWith(option[1])) {
        if (!resultingWords[letters[index]].includes(word)) {
          resultingWords[letters[index]].push(word);
        }
      }
    });
  });
  console.log(resultingWords);
  return resultingWords;
};
/* Only make changes below this comment */

challengeOne(["s", "A"]);

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
