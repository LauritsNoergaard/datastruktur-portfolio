export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        //this.node = {data, next};
    }

    enqueue(data) {
        // Add a new node in back of the queue
        let node = new Node(data, null)

        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue() {
        if (this.head != null) {
            this.head = this.head.next
        } else {
            console.log("No list exists")
        }
        if(this.head === null) {
            this.tail = null;
        }
    }

    peek() { // returns the object at the front of the line
        return this.tail;
    }

    size() {
        let node = this.head;
        let count = 0;
        while (node){
            count++
            node = node.next;
        }
        return count
    }

    get(index) { // Returns the element on that index
        let node = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return node;
            }
            node = node.next;
        }
        console.log("No node found at index: " + index);
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}