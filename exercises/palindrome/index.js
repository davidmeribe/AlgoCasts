// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((char, i) => {
       return char === str[str.length - i - 1];
   });
}

module.exports = palindrome;

// another option using every

// function palindrome(str) {
//     // reverse the string
//      const rev = str.split('').reverse().join('');   //O(n)
//      const isPalin = str == rev;
   
//      return isPalin;
//  }

// ====================================

// // my answer
// function palindrome(str) {
//     let isPalin = true;
  
//     const n = str.length;
//    // reverse the string
//     const rev = str.split('').reverse().join('');   //O(n)
   
//     // compare with the original  
//     for(let i = 0; i < n; i++){
//         if (str.charAt(i) != rev.charAt(i)){
//              isPalin = false;
//              // break makes method slower, not sure why
//         }
//     }
//   return isPalin;
// }
