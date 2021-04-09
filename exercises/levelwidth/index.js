// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counters = [];
    let neighbors = [root, 's'];

    counters.push(0);
    while(neighbors.length > 1){
          let node = neighbors.shift();
          if (node !== 's'){
              neighbors.push(...node.children);
              counters[counters.length - 1]++;
          }
          else{
              //reset to next level
              neighbors.push('s');
              counters.push(0);
          }   
    }   
    return counters;
}

module.exports = levelWidth;
