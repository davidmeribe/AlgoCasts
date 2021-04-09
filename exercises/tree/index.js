// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
         this.children = this.children.filter(node => {
                      return node.data !== data;
         })
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        let neighbors = [];
        neighbors.push(this.root);
        while(neighbors.length){
             //work beadth first
             let node = neighbors.shift();
             //append the children to end of the list
            //    while(node.children.length){
            //      let child = node.children.shift();
            //      neighbors.push(child);
            //    }
            neighbors.push(...node.children);
           //apply function to the parent and move on
            fn(node);
        }
    }

    traverseDF(fn){
         let neighbors = [this.root];
         while(neighbors.length){
            let node = neighbors.shift();
            
            neighbors.unshift(...node.children);

            fn(node);
         }
    }
}

module.exports = { Tree, Node };
