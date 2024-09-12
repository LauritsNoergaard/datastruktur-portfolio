export default class SinglyLinkedList {
    constructor () {
        this.head = null
    }
    
    addInBeginning(data) {
        const newNode = new Node(data, this.head);
        
        console.log(newNode)
        //newNode.next = this.head

        this.head = newNode
        
    }

    getFirstNode() {
        return this.head
    }

    getLastNode() {
        let node = this.next
        while(node.next) {
            node = this.head.next
        }
        console.log("Last node:", node);

        return node;
    }

    getNextNode(node) {
        return node.next
    }

    getNodeWith (data) {
        let node = this.head

        while(node.data != data && node.next) {
            node = node.next
        }

        console.log("Node with said data: ", node);

        return node;
    }

    removeFirstNode() {
        if (this.head != null) {
            this.head = this.head.next
        } else {
            console.log("No list exists")
        }
    }

    removeLastNode() {
        let node = this.head
        if (!node) {
            console.log("List is empty")
            return 
        }
        if (node.next) {
        while(node.next.next) {
            node = node.next
        }
        node.next = null
        } else {
            this.head = null
        }
        console.log("Last node deleted");
    }

    removeNode(nodeToRemove) {
        let node = this.head
        if (!node) {
            console.log("List is empty")
            return 
        }
        if (this.head == nodeToRemove) {
            this.head = this.head.next
            console.log ("Deleted the head")
            return 
        }
        
        while(node.next && node.next != nodeToRemove) {
            node = node.next
        }
            if (node.next === nodeToRemove) {
            node.next = node.next.next
            } else {
                console.log("Node doesn't exist")
            }
        console.log("Node deleted");
    }

    remove (data) {
        let node = this.getNodeWith(data)
        this.removeNode(node)
    }

    dumpList() {
        let node = this.head
        
        while(node) {
            console.log("Node: ", node);
            node = node.next
        }

        return node;
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
    
}

class Node {
    constructor(data, pointer) {
        this.data = data;
        this.next = pointer;
    }
}