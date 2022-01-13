// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                   "n","o","p","q","r","s","t","u","v","w","x","y","z"];

function caesar(input, shift, encode = true){
  //returns false early if incorrect input or shift
  if( shift < -25 || shift === 0 || shift > 25) return false;

  // reverses the shift for decoding
  if(!encode) shift *= -1;

  //ignores capital letters
  input = input.toLowerCase();


  let result = "";

//compares letter of input to our letter of alphabet 
  for(let i = 0; i < input.length; i++){
    const currentLetter = input[i];
    const index = alphabet.indexOf(currentLetter);

    
      if (alphabet.includes(currentLetter)){
        shift > 0
        // for shift > 0 letter = letter+ shift and remainder
        // to wrap alphabet
        ? result += alphabet[(index + shift) % 26]
        //else if a negative shift, adds 26 to index and shift

        : result += alphabet[((index + shift)+ 26) % 26];
      }
      //returns characters not in the alphabet
      else{
      result += currentLetter;
    }
  }
return result;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

