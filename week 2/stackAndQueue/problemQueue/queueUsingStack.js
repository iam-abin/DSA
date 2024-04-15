class stack {
  constructor(value) {
    this.top = {
      value: value,
      next: null
    }
  }

  push(value) {
    let node = {
      value: value,
      next: null
    }
    node.next = this.top
    this.top = node
  }

  pop() {
    if (this.top == null) {
      return
    }
    this.top = this.top.next
  }

  display() {
    let st = new stack()
    if (this.top == null) {
      console.log("stack underflow");
      return
    } else {
      let container = this.top
      while (container != null) {
        console.log(container.value);
        st.push(container.value)
        container = container.next
      }
    }

    return st
  }
}
let s = new stack(10)
s.push(20)
s.push(30)
s.push(40)
let ss = s.display()

ss.display()
console.log("________________");
ss.display()
