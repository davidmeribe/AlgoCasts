// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //split by space and capitalize every first leter
    // of each word of array 
    let wordArr = str.split(' ');
    //capitalize 
    for(let i = 0; i < wordArr.length; i++){   
        wordArr[i] = capital(wordArr[i]);
        //could use wordArr.push(word)
    } 
    return wordArr.join(' ');
}

//helper capitalize
function capital(str){  
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;

// another way 
// look the left of the string
// check for space, if there is, capitalize
// else just add it to the result string
//boundary case, always have to capitalize first char manually