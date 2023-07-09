class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (this.top == null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;

    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        console.log(this.size);
    }

    stringReverse(str) {
        for (let i = 0; i < str.length; i++) {
            this.push(str[i])
        }
        let str2 = ""
        let temp = this.top;
        while (temp) {
            str2 += temp.data;
            temp = temp.next;
        }

        return str2
    }

    pop() {
        if (this.top == null) {
            console.log("Stack is empty.");
            return;
        }
        this.top = this.top.next;
        this.size++;
    }

    display() {
        let temp = this.top;
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return
        }

        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const stt = new Stack();
let str = "ajay"


console.log(stt.stringReverse(str));