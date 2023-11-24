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
            this.size++;
            return;
        }

        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.top == null) {
            console.log("stack underFlow");
            return;
        }

        let temp = this.top.data;
        this.top = this.top.next;
        this.size--
        return temp;
    }

    peek() {
        if(!this.top){
            console.log("stack underFlow");
            return 
        }
        console.log(this.top.data);
        return;
    }

    display() {
        if (this.top == null) {
            console.log("stack underFlow");
            return;
        }

        let temp = this.top;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }

    }
}


class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(data) {
        this.stack1.push(data);
    }

    dequeue() {
        let temp = this.stack1.top;
        while (temp) {
            this.stack2.push(this.stack1.pop())
            temp = temp.next;
        }
        this.stack2.pop()
        return JSON.stringify(this.stack2)

    }

}

let q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());


