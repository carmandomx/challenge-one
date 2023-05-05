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
// Es un travalenguas?
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
  /* Only make changes below this comment */

  // Store words that start with each letter
  const wordsXLetter = {};
  // Regular expression
  const words = text.match(/\b\w+/g);

  words.map((word) => {
    // Get the 1st letter
    const firstLeter = word.charAt(0).toLowerCase();
    // Check if the first letter is in the array
    if (letters.includes(firstLeter)) { 
      if (!(wordsXLetter[firstLeter])) {
        wordsXLetter[firstLeter] = [];
      }
      // Add the word if does not exist
      if (!(wordsXLetter[firstLeter]).includes(word)) { 
        wordsXLetter[firstLeter].push(word);
      }
    }
  });

  return wordsXLetter;
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
