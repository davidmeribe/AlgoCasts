// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // used function
  return str.split('').reduce((rev, char) => char + rev, '');

}

module.exports = reverse;

//solution1
//  let n = str.length;
//  let ret = ""; // return variable
// for (let i = n - 1; i > -1; --i){
//     ret = ret.concat(str.charAt(i));
// }

//solution1.5
// for (let i = 0; i < n; ++i){
//     ret = str.charAt(i) + ret;
// }

// suggested solution
// function reverse (str){
//     return str.split('').reverse().join('');
// }
