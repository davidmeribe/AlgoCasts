// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
     const chunked = [];
     let index = 0;

     while(index < array.length){
         chunked.push(array.slice(index, index + size));
         index += size;
     }

     return chunked;
}

module.exports = chunk;

// Other solutions
//  function chunk(array, size){
    //    const chunked = [];
    //    for (let elem of array){
    //        const last = chunked[chunked.length - 1];

    //        if (!last || last.length === size){
    //            chunked.push([elem]);
    //        }else{
    //            last.push(elem);
    //        }
    //    }
    //return chunked;
//  }

// my solution
//function chunk(array, size){
    // let arrChunk = [];
    // let chunk = [];
    // for (let elem of array){
    //     if (chunk.length < size){
    //        // add element to the end of chunk
    //         chunk.push(elem); 
    //     }
    //     else if(chunk.length == size){
    //        //chunk is full, reset chunk
    //        // but first add chunk to the array chunk
    //        // need to actually copy the chunk
    //        let copy = [...chunk];
    //        arrChunk.push(copy);
    //        // now we can reset
    //        chunk.splice(0,size);  // probably takes O(n) *cries because of inefficiency*
    //        //now add the current elem to the empty chunk
    //        chunk.push(elem);
    //     }
    // }
    // // if there are still items in the chunk at the end of the loop 
    // // add the unfinished chunk into the arr chunk
    // if(chunk.length != 0){
    //     arrChunk.push(chunk);
    // }
    
    // return arrChunk;
//  }