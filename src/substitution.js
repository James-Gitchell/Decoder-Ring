// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const orgAlpha =  ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    input = input.toLowerCase();
   
    let result = "";
    
    //checks for letter duplicates
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }

    for (let i = 0; i < input.length; i++) {
      let inputLetter = input[i];

      //ignores spaces
      if (inputLetter === " ") {
        result += inputLetter;
      }

      //loops through original alphabet arra for comparison
      for (let j = 0; j < orgAlpha.length; j++) {
        
        if (encode) {

          //compares input letter to orgAlphabet and returns
            //specified index of the user alphabet
         let orgAlphaLetter = orgAlpha[j];
          if (inputLetter === orgAlphaLetter) result += alphabet[j];
        }
        //else returns indexof orgAlphabet + m1
         else {
          orgAlphaLetter = alphabet[j];
          if (inputLetter === orgAlphaLetter)
            result += orgAlpha[j];
        }
      }
    }console.log(result);
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
