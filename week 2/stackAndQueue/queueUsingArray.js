class QueueArray {
    constructor() {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data) {
        if (this.front && this.rear === -1) {
            this.front++;
            this.rear++;
            this.queue[this.rear] = data;
            return;
        }
        this.rear++;
        this.queue[this.rear] = data;
    }

    dequeue() {
        if (this.rear == -1) {
            console.log("Queue is empty");
            return
        }

        for (let i = 0; i < this.rear; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.rear--;
        if (this.rear == -1) {
            this.front = -1;
        }
        this.queue.length--;
    }

    display() {
        console.log(this.queue);
    }
}

const q = new QueueArray();
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()

q.dequeue()
q.enqueue(10)
q.enqueue(20)

q.display()