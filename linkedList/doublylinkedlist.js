export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    dumpList() {
        let node = this.head
            
            while(node) {
                console.log("Node: ", node);
                node = node.next
            }
    
            return node;
    }

    addNodeLast(node) {
        if(!this.head) {
            this.head = node
        }
        node.next = null
        node.prev = this.tail

        if(this.tail) {
            this.tail.next = node;
        }

        this.tail = node;
    }

    addNodeFirst(node) {
        node.next = this.head
        node.prev = null;

        if(this.head) {
            this.head.prev = node
        }

        this.head = node

        /* I forgot about this: 
        if you make a list using only addFirst methods, 
        then tail will always be null and hence removeLast() will not work */
        //So the following is needed:
        if(!this.tail) {
            this.tail = node
        }
    }

    addLast(data) {
        const newNode = new Node(data);
        this.addNodeLast(newNode)
    }

    addFirst(data) {
        const newNode = new Node(data);
        this.addNodeFirst(newNode)
    }

    removeLast() {
        //If the list is empty
        if(!this.tail){
            console.log("List is empty")
            return 
        }

        const lastNode = this.tail

        //If the last node is the only node in the list
        if(this.head === this.tail) {
            
            this.head = null
            this.tail = null
            return lastNode
        }

        this.tail = this.tail.prev
        this.tail.next = null;

        //Having .data is necesarry for this line to work: list.addLast(list.removeLast());
        return lastNode.data
    }

    removeFirst() {
        //If the list is empty
        if(!this.head){
            console.log("List is empty")
            return 
        }

        const firstNode = this.head

        //If the last node is the only node in the list
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
            return firstNode
        }

        this.head = this.head.next
        this.head.prev = null
        return  firstNode
    }

    removeNode(nodeToRemove) { 
        let node = this.head;

        if (!node) {
            console.log("List is empty");
            return 
        }

        //Go through the list to find the right node
        while(node != nodeToRemove && node != this.tail) {
            node = node.next;
        }

        //In case node to remove is the head
        if (this.head === nodeToRemove) {
            this.head = this.head.next;
            return 
        }

        //In case node to remove is the tail
        if (this.tail === nodeToRemove) {
            this.tail = this.tail.prev;
            console.log("Deleted the tail")
            return
        }

        if (node === nodeToRemove) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            console.log("Node deleted");
            } else {
                console.log("Node doesn't exist")
            }
    }

    insertBeforeNode(nodeToAdd, beforeNode) { //TODO MAYBE THIS DOESN'T WORK TOO
        //In case beforeNode is the head
        if(beforeNode === this.head) {
            nodeToAdd.next =this.head;
            nodeToAdd.prev = null;
            this.head.prev = nodeToAdd;
            this.head = nodeToAdd;
            return 
        }

        nodeToAdd.next = beforeNode;
        nodeToAdd.prev = beforeNode.prev;
        beforeNode.prev = nodeToAdd;
        nodeToAdd.prev.next = nodeToAdd;
    }

    insertAfterNode(nodeToAdd, afterNode) { //TODO THIS DOESN'T WORK
            //TODO WHY DOES THIS CAUSE AN INFINITE LOOP WHEN DOING DUMPLIST AFTER

        //In case afterNode is the tail
        if(afterNode === this.tail) {
            nodeToAdd.next = null;
            nodeToAdd.prev = this.tail;
            this.tail = nodeToAdd;
            return
        }

        const originalNext = afterNode.next;

        nodeToAdd.next = originalNext;
        nodeToAdd.prev = afterNode;

        if(originalNext) {
            originalNext.prev = nodeToAdd;
        }
        afterNode.next = nodeToAdd;
    }

    swapNodes(nodeB, nodeC) { //TODO THIS DOESN'T WORK
        if (nodeB === nodeC) {
            return;
        }

        //In case nodeB is head
        if(this.head === nodeB) {
            this.head = nodeC;
        } else {
            nodeB.prev.next = nodeC;
        }

        //In case nodeC is head
        if(this.head === nodeC) {
            this.head = nodeB;
        }

        //In case nodeB is tail
        if(this.tail === nodeB) {
            this.tail = nodeC;
        } else {
            nodeB.next.prev = nodeC;
        }

        //In case nodeC is tail
        if(this.tail === nodeC) {
            this.tail = nodeB
        } else {
            nodeC.next.prev = nodeB;
        }

        //const bNext = nodeB.next;
        const bPrev = nodeB.prev

        nodeB.next = nodeC.next;
        nodeB.prev = nodeC;

        nodeC.next = nodeB;
        nodeC.prev = bPrev;
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

    nodeAt(index) {
        let node = this.head;
        let count = 0;
        while (count != index && node != this.tail){
            count++
            node = node.next;
            }
        return node
    }

    get(index) {
        let node = this.nodeAt(index)
        return node.data
    }

    indexOf(nodeData) {
        let node = this.head;
        let count = 0;
        while (node){
            if(nodeData === node.data) {
                return count;
            }
            count++;
            node = node.next;
            }
        return "Node not found";
    }

    insertAfter(index, data) { //TODO THIS USES insertAfterNode WHICH DOESN'T WORK YET
        const afterNode = this.nodeAt(index);

        if(!node) {
            console.log("Index doesn't exist");
            return;
        }

        const node = new Node(data)

        this.insertAfterNode(node, afterNode);
    }

    insertBefore(index, data) { //TODO THIS USES insertBeforeNode WHICH DOESN'T WORK YET
        const beforeNode = this.nodeAt(index);

        if(!node) {
            console.log("Index doesn't exist");
            return;
        }

        const node = new Node(data)

        this.insertBeforeNode(node, beforeNode);
    }

    first() {
        if(this.head) {
            return this.head
        } else {
            console.log("No list exists")
        }
        
    }

    last() {
        if(this.tail) {
            return this.tail
        } else {
            console.log("No list exists")
        }
    }
    
    remove(data) {
        const indexToRemove = this.indexOf(data);
        const nodeToRemove = this.nodeAt(indexToRemove);

        this.removeNode(nodeToRemove);
    }

    removeIndex(index) {
        const nodeToRemove = this.nodeAt(index);
        console.log("The following node has been removed: " + nodeToRemove.data);
        this.removeNode(nodeToRemove);
    }
    
    clear() {
        if(this.head) {
            let node = this.head;
            while (node) {
                this.removeNode(node)
                node = node.next;
            }
            console.log("List has been cleared");
        } else {
            console.log("No list exists");
        }
    }
}

class Node {
    constructor(data, nPointer, pPointer) {
        this.data = data;
        this.next = nPointer;
        this.prev = pPointer;
    }
}