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
  const words = text.match(/\b\w+\b/g); // get all words in the text
  const uniqueWords = {}; // object to store unique words that start with each letter

  // loop through each word and check if it starts with any of the given letters
  for (const word of words) {
    for (const letter of letters) {
      if (word.toLowerCase().startsWith(letter.toLowerCase())) {
        // add the word to the corresponding letter array in uniqueWords object
        if (!uniqueWords[letter]) {
          uniqueWords[letter] = [word];
        } else if (!uniqueWords[letter].includes(word)) {
          uniqueWords[letter].push(word);
        }
      }
    }
  }

  return uniqueWords;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
