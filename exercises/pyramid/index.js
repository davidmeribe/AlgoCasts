// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// recursive solution
function pyramid(n, row=0, level='') {
    if (row === n){
        return;
    }
    // done with a level, print and move to next row/level
    if (level.length === (2 * n - 1)){
        console.log(level);
        return pyramid(n, row+1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    }else{
        add = ' ';
    }
   pyramid(n, row, level + add);
}

module.exports = pyramid;

//my solution
// function pyramid(n) {
//     let linelength = (n * 2) - 1;
    
//     for(let row=1; row <= n; row++){
//         let line = ''; 
//         let stairs = (row * 2) - 1;
//         let space = linelength - stairs; 
//         let halfspace = space/2;
//         for (let col=1; col <= linelength; col++){
//             if (line.length < halfspace){
//                 line += ' '
//             }
//             else if(line.length < (halfspace + stairs)){
//                 line +='#';
//             }
//             else {
//                 line += ' ';
//             }
//         }
//         console.log(line);    
//     }
// }