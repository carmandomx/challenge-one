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
  const words = text.replace(/[.,]/g, "").split(/\s+/); //Creation of an array that will contain every word in the text, using a regular expresion to remove punctuation marks. And then and then splits the text by whitespace

  ////This condition checks if the first occurrence of the current word in the words array is equal to the current index.
  // If they are equal, it means this is the first occurrence of the word in the array, and the function returns true.
  // If not, it means the word has already appeared earlier in the array, so it's a duplicate, and the function returns false.
  const uniqueWords = words.filter(
    (word, index, self) => self.indexOf(word) === index
  );
  const answer = {}; //Create an object that will store the answers

  letters.forEach((letter) => {
    //For each letter passed as parameter
    answer[letter] = uniqueWords.filter(
      (word) => word[0].toLowerCase() === letter.toLowerCase()
    ); //Check the uniqueWords array and if the first letter in lowercase of a word is equal to the letter passed as parameter in lowercase
    //If it is equal, the answer object is filled  with arrays of unique words that start with the provided letters.
  });

  return answer;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
