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
  // Split the input text into words using non-word characters as delimiters
  let splittedText = text.split(/\W+/);
  // Create an empty object to store words categorized by their starting letter
  let resultingWords = {};
  // Create an array of letter options for each given letter, including upper and lowercase
  const options = letters.map((letter) => [
    letter.toUpperCase(),
    letter.toLowerCase(),
  ]);

  // Iterate through the array of letter options
  options.forEach((option, index) => {
    // Initialize an empty array for the letter if it doesn't exist in the resultingWords object
    if (!resultingWords[letters[index]]) {
      resultingWords[letters[index]] = [];
    }

    // Iterate through each word in the splittedText array
    splittedText.forEach((word) => {
      // Check if the word starts with either the uppercase or lowercase version of the current letter
      if (word.startsWith(option[0]) || word.startsWith(option[1])) {
        // If the word is not already in the array for the current letter, add it
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
