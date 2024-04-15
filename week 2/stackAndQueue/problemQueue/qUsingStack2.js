class Queue{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }

    enqueue(data){
        this.stack1.push(data);
    }

    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop());
            }
        }
        this.stack2.pop();
        console.log(this.stack2);
        
        while(this.stack2.length>0){
            this.stack1.push(this.stack2.pop());
        }
    }

    display(){
        console.log(this.stack2);
    }
}

let q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue()

q.enqueue(10);
q.enqueue(10);
q.enqueue(10);
q.dequeue()



