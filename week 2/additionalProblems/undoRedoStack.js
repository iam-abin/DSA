class Stack{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }

    push(data){
        this.stack1.push(data);
       
    }

    undo(){
        this.stack2.push(this.stack1.pop());
       
    }

    redo(){
        this.stack1.push(this.stack2.pop());
    }
    
    display(){
        console.log(this.stack1);
        console.log(this.stack2);
    }
}

let s=new Stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.undo()
s.undo()
s.undo()
s.redo()
s.redo()
s.redo()

s.display()