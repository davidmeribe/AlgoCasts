// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let neg;

    if (n < 0){
       neg = true; 
       n = Math.abs(n);
    }
    // convert to a string to get length
    let numStr = n.toString();
     numStr = numStr.split('').reverse().join(''); // reverse
    // convert to number
     n = parseInt(numStr);
     //make negative again // be replaced with Math.sign
    if(neg){
        n = -1 * n; 
    }

    return n;
}

module.exports = reverseInt;
