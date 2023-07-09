class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    reverseStr(s) {
        let str = ""
        for (let i = 0; i < s.length; i++) {
            this.top++;
            this.stack[this.top] = s[i];
        }

        while (this.top >= 0) {
            str += this.stack[this.top];
            this.top--;
        }
        console.log(str);
    }

}

let s = "brototype";
const st = new Stack()
st.reverseStr(s)
