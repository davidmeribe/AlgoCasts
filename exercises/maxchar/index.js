// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
// create object of char frequency table
 let chars = {};
 let max = 0;
 let maxchar = '';
// build frequency table
 for(let char of str){
     if(!chars[char]){
         chars[char] = 1;
     }else{
         chars[char]++;
     }
 }
 // check the max number in the frequency table
 for(let char in chars){
    if (chars[char] >= max){
        max = chars[char];
        maxchar = char;
    }
 }
 return maxchar;
}

module.exports = maxChar;
