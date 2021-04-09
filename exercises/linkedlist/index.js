// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    getFirst(){
        return this.head;
    }
    
    size(){
        let count = 0;
        let node = this.head;
        while (node){
            count++;
            node = node.next;
        }
        return count;
    }

    getLast(){
        let last = this.head;
        if (!last){
            return null;
        }

        while(last){
           if(!last.next){
               return last;
           }
           last = last.next;
        }
        return last;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if (!this.head){
            return null;
        }
      const node = this.head
      this.head = node.next;
      node.next = null;
     
     // return node;
    }

    removeLast(){
        let previous;
        let node;
        if (!this.head){
            return;
        }
        if(!this.head.next){
           this.head = null;
           return;
        }
        
        node = this.head;
        while(node.next){
          previous = node;
          node = node.next;
        }
        previous.next = null;
        
        //return node;
    }

    insertLast(data){
       if (!this.head){
          this.head = new Node(data);
          return;
       }
      let node = this.head;
       while(node.next){
           node = node.next;
       }
       node.next = new Node(data);

    }

    getAt(i){
       let index = 0;
       
       if (!this.head){
           return null;
       }

       let node = this.head;
       while(node){
           if (index === i){
               return node;
           }
            node = node.next;
            index++;
       }

       return node;
    }

    removeAt(i){
        // the linkedlist is empty
        if (!this.head){
            return;
        }
        //if deleting the first node
        if (i == 0){
            this.head = this.head.next;
            return;
        }
         
        let previous = this.getAt(i-1);
         // update the next pointer
         //look for other edge cases
         if(!previous|| !previous.next) { 
             return;
            }
        previous.next = previous.next.next;
    }

    insertAt(data, index){
        let newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
            return;
        }
        if (index == 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // get the index before the addition
        let previous = this.getAt(index - 1) || this.getLast();
        // quick check
        // if (!previous){
        //     previous = this.getAt(this.size() -1);
        //     previous.next = newNode;
        //     return;
        // }
        
        newNode.next = previous.next;
        previous.next = newNode; 
    }

    forEach(fn){
        if (!this.head){
            return;
        }
        let node = this.head;
        for(let i=0; i < this.size(); i++){
            fn(node);
            node = node.next;
        }
        return;
    }

    *[Symbol.iterator](){
          let node = this.head;
          while(node){
              yield node;
              node = node.next;
          }
    }
}

module.exports = { Node, LinkedList };
