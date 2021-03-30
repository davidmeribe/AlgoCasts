// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // we want to make the strings workable
  stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB.replace(/[^\w]/g, "").toLowerCase();

  // if the lengths are different (after cleanup) no need to compare.
  if (stringA.length !== stringB.length){
      return false;
  }
  // build char map for A and B
   const charMapA = buildCharMap(stringA);  
   const charMapB = buildCharMap(stringB);
   
   // loop through char map and compare
   for (let char in charMapA){
       if (charMapA[char] !== charMapB[char]){
          return false;
       }  
   } 
   return true;
}

function buildCharMap(str){
    const charMap = {};
    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        }else{
            charMap[char]++;
        }
    }
   return charMap; 
}

module.exports = anagrams;


// // inefficient method
// function anagrams(stringA, stringB){
//  let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
//  let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

//   return strA === strB;
// }