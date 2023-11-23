class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

    }


    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;

    }

    display() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    arrayToLinked(arr) {
        for (let i of arr) {
            this.addNode(i);
        }
    }

    insertAfter(nextTo, data) {
        const newNode = new Node(data);
        let temp = this.head;
        while (temp != null && temp.data != nextTo) {
            temp = temp.next;
        }
        if (temp == null) {
            console.log("value Not Fount.");
            return;
        }
        if (temp == this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    insertBefore(before, data) {
        const newNode = new Node(data);
        let temp = this.head;
        let prev = null;
        while (temp != null && temp.data != before) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null) {
            console.log("not find");
            return;
        }
        if (temp == this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        newNode.next = prev.next;
        prev.next = newNode;
    }

    insertAt(pos, data) {
        const newNode = new Node(data);
        let temp = this.head;
        let prev = null;
        let count = 0;

        while (temp != null && count != pos) {
            prev = temp;
            temp = temp.next;
            count++;
        }
        if (temp == null) {
            console.log("No such position");
            return;
        }
        if (temp == this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return;

        }

        newNode.next = prev.next;
        prev.next = newNode;
    }


    addAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }


    delete(data) {
        let temp = this.head;
        let prev = null;
        if (temp != null && temp.data == data) {
            this.head = this.head.next;
            return;
        }
        while (temp != null && temp.data != data) {
            prev = temp;
            temp = temp.next;
        }
        if (temp == null) {
            console.log("Data not found ");
            return;
        }

        if (temp == this.tail) {
            prev.next = null;
            this.tail = prev;
            return;
        }

        prev.next = temp.next;
    }


    search(data) {
        let count = 0;

        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let temp = this.head;
        while (temp != null && temp.data != data) {
            count++;
            temp = temp.next;
        }
        if (temp == null) {
            console.log("Value not found");
            return;
        }
        console.log("value found at " + count);
    }


    toArray() {
        if (!this.head) {
            return [];
        }

        let arr = []
        let temp = this.head;
        while (temp != null) {
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }


    listToDecimal() {
        this.reverse();
        let temp = this.head;
        let position = 0;
        let decimal = 0
        while (temp != null) {
            decimal = decimal + temp.data * Math.pow(2, position);
            temp = temp.next;
            position++;
        }
        return decimal;
    }


    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }


    sort() {
        if (this.head.next === null) {
            return this.head;
        }

        let current = this.head;
        let nextNode = null;
        while (current != null) {
            nextNode = current.next;
            while (nextNode != null) {
                if (current.data > nextNode.data) {
                    let temp = current.data;
                    current.data = nextNode.data;
                    nextNode.data = temp
                }
                nextNode = nextNode.next;
            }
            current = current.next;
        }
    }


    displayHead() {
        console.log(this.head);
    }

    removeDuplicate() {
        let current = this.head;
        let prev = null;
        let temp = null;
        if (this.head == null) {
            console.log("list is empty");
            return;
        }
        while (current != null) {
            prev = current;
            temp = current.next;
            while (temp != null) {
                if (temp.data == current.data) {
                    prev.next = temp.next;
                } else if (temp.data == current.data && temp === this.tail) {
                    this.tail = prev;
                } else {
                    prev = temp;
                }
                temp = temp.next;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList();



list.addNode(8);
list.addNode(1);
list.addNode(5);
list.addNode(1);
list.addNode(3);
list.addNode(7);
list.sort()
list.display()

