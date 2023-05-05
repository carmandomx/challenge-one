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

  const wordsArray = text.split(/[.,\n\s]+/g) //Separating text into words ignoring points, commas and linebreaks
  wordsArray.pop() //Ignoring last empty array

  const wordsArrayLength = wordsArray.length //length of the array of words for a loop

  const lettersArrayLength = letters.length //length of the array of input letters for a loop
  let answerObject = {} //empty object to contain the answer

  letters.forEach(element => {
    answerObject[element] = [] //creating the objects which keys are the input letters
  })
  for (i=0; i<lettersArrayLength; i++){ //iterating through every input letter...
    for (j=0; j<wordsArrayLength;j++){ //iterating through every word in the array created from the text
      if (letters[i].toLowerCase()===wordsArray[j][0].toLowerCase()){ //if an input letter matches the first letter of the word array...
        answerObject[letters[i]].push(wordsArray[j]) // Pushing the words to the answer array
      }
    }
    answerObject[letters[i]]=[...new Set(answerObject[letters[i]])] //deleting duplicated elements in the anser
  }

  return answerObject


  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.challengeOne = challengeOne;
