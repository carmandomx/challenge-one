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
    const words = text.split(/\s+/); //Saving text in an array called words and delimited by spaces and newlines
    let wordsWithoutComas = words.map(word => word.replace(/[^\w\s]|_/g, "")); //eliminating commas and punctuation from the words using regex for punctuation targeting
    const result = {};
  
    for (const letter of letters) {
      const wordWithLetter = wordsWithoutComas.filter((word) => {
        if(word.startsWith(letter) || word.startsWith(letter.toUpperCase()) ){  //Conditional to find uppercase cases
          return word;
        }
      });
      const deleteDuplicates = new Set(wordWithLetter); //deleting duplicating words building a new set object and saving it in a final array
      const arrayWords = Array.from(deleteDuplicates);
        
        if (arrayWords.length > 0) {
          result[letter] = arrayWords;
        }
    
    
  
  };
  return result;

};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
