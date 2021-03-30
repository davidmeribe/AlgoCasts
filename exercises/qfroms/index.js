// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    #stack1;
    #stack2;
    constructor(){
      this.#stack1 = new Stack();
      this.#stack2 = new Stack();
    }
    
    add(data){
        //add on top
        this.#stack1.push(data);
    }

    remove(){
        while(this.#stack1.peek()){
            if(this.#stack1.peek()){
                this.#stack2.push(this.#stack1.pop());
            }             
        }
        const rem = this.#stack2.pop();

     //restore storage to stack1;
      while(this.#stack2.peek()){
        if(this.#stack2.peek()){
            this.#stack1.push(this.#stack2.pop());
        }         
       }

        return rem;
    }

    peek(){ 
        // next one out is the bottom of stack
        while(this.#stack1.peek()){
            if(this.#stack1.peek()){
                this.#stack2.push(this.#stack1.pop());
            }             
        }
        const p = this.#stack2.peek();

        //restore storage to stack1;
       while(this.#stack2.peek()){
        if(this.#stack2.peek()){
            this.#stack1.push(this.#stack2.pop());
        }             
      }
      return p;
    }
}

module.exports = Queue;
