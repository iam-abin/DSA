class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.rear == null) {
            this.front = newNode
            this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;

    }

    dequeue() {
        if (this.rear == null) {
            console.log("Queue is empty");
            return;
        }

        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null
        }
    }

    display() {
        if (this.rear == null) {
            console.log("Queue is empty");
            return;
        }

        let temp = this.front;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

}


let q = new Queue();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(100)
q.display()