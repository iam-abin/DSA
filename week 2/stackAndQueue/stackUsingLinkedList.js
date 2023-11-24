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


const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()
console.log(stack.size);
console.log("--------");
stack.pop()
stack.pop()
stack.pop()
stack.peek()


