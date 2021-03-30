// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   const matches = str.match(/[aeiou]/ig);

   return matches ? matches.length : 0;
}

module.exports = vowels;


//my solution
// function vowels(str) {
//     //let bank = ['a', 'e', 'i', 'o', 'u'];
//     let match = /[aeiou]/i;
//     let count = 0;
//      for (let char of str){  
//          if (match.test(char)){
//              count++;
//          }   
//      }
    
//      return count;
// }