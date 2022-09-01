/* 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
    head:{
        value: 1,
        next: {
            value:2,
            next: {
                value: 3,
                next:{
                    value: 4,
                    next:{
                        value: 5,
                        next: null
                }
            }
        }

    }
}
}; */

class node {
    constructor(value){
       this.value = value;
       this.next = null;
        };
}


class mySinglyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head

        this.length = 1;       
    }

    append(value){
      const newNode = new node(value)
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    preppend(value){
        const newNode = new node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index , value){
        if(index >= this.length){
            return this.append(value)
        }

        const newNode = new node(value);
        const firstPointer = this.getIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;

    }

    getIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(index !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLinkedList = new mySinglyLinkedList(1);