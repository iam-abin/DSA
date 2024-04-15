class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }

    push(data){
        const newNode=new Node(data);
        if(this.top==null){
            this.top=newNode;
        }else{
            newNode.next=this.top;
            this.top=newNode;
        }
        this.size++;
    }

    pop(){
        if(this.top==null){
            console.log("Stack underflow");
            return;
        }
        let tempTop=this.top.data;
        this.top=this.top.next;
        this.size--;
        return tempTop;
    }

    peek(){
        if(this.top==null){
            console.log("Stack is empty.");
            return;
        }
        console.log(this.top.data);
    }

    isEmpty(){
        return this.size===0
    }
    

    display(){
        let temp=this.top;
        if(this.top==null){
            console.log("stack is empty");
            return;
        }
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
      
    }

}

class Queue{
    constructor(){
        this.stack1=new Stack()
        this.stack2=new Stack()
    }

    enqueue(data){
        this.stack1.push(data);
    }

    convert(){
        if(!this.stack2.top){
            while(this.stack1.top!=null){
               
                this.stack2.push(this.stack1.pop());
            }
        }
       
    }
    dequeue(){
        this.convert()
       this.stack2.pop()
    }

    display(){
        this.convert()
        let temp=this.stack2.top;
      
        if(temp==null){
            console.log("stack is empty");
            return;
        }
        
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
      
    }
}

const q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(230);
q.display()


