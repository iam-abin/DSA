class StackArray {
    constructor() {
        this.stack = [];
        this.top = -1;
    }


    push(data) {
        this.top++;
        this.stack[this.top] = data;
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack underflow");
            return;
        }
        this.top--;
        this.stack.length--;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack underflow");
            return;
        }
        console.log(this.stack[this.top]);
    }

    display() {
        if (this.top === -1) {
            console.log("Stack underflow");
            return;
        }
        for (let i = this.top; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
}

const s = new StackArray();
s.push(10)
s.push(20)
s.push(30)
s.pop()
s.pop()
s.pop()
s.pop()
s.display()