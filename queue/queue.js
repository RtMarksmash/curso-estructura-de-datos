class node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first
    }

    enqueue(value){
         const newNode = new node(value);
         if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
         } else {
            this.last = newNode;
            this.last.next = newNode;
         }

         this.length++;
         return this;
    }

    dequeue(){
        this.first = this.first.next
        this.length--;
        return this;
    }
}

const myQueue = new Queue();