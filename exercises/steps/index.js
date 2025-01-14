// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair = '') {
    // recursive solution
    if(n == row){
        return;
    }
    if (n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }

    if (stair.length <= row){
        stair += '#';
    }else {
        stair += ' ';
    }
    steps(n, row, stair);

}



module.exports = steps;

// iterative solution
// function steps(n) {
    
//     for (let i =1; i < n+1; i++){
//         let step=1;
//         let space= n - step; 
//         let line = ''; 

//         while(line.length != n) {
//             if (step <= i) {
//                 line += '#';
//                 step++;
//             }else{
//                 line +=' ';
//                 space--;
//             }
//           }
//           console.log(line);   
//     }
// }