// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
   let results = [];
   // build results array
   for (let i=0; i < n; i++){
        results.push([]);
   }

   let counter = 1;
   let strtRow = 0;
   let strtCol = 0;
   let endCol = n-1;
   let endRow = n-1;

   while(strtCol <= endCol && strtRow <= endRow){
         //top row
        for (let i = strtCol; i <= endCol; i++){
               results[strtRow][i] = counter;
               counter++;
        }
        strtRow++;

        //Right col
        for(let i = strtRow; i <= endRow; i++){
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row
        for(let i = endCol; i >= strtCol; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column
        for(let i = endRow; i >= strtRow; i--){
            results[i][strtCol] = counter;
            counter++;
        }
        strtCol++;
   }
    console.log(results);
   return results; 
}

module.exports = matrix;
