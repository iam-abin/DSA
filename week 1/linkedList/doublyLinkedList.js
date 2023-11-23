class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}

class DLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    addNode(data){
        const newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
        }
        this.tail=newNode;
    }

    display(){
        if(!this.head){
            console.log("List is empty.");
            return;
        }
        let temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }

    }

    insertBegining(data){
        const newNode = new Node(data);
        if(this.head===null){
            this.head=newNode;
            
        }else{
            newNode.next=this.head;
            this.head.prev=newNode;
        }
        this.head=newNode;
    }

    insertAfter(nextTo,data){
        const newNode =new Node(data);
        if(!this.head){
            console.log("List is empty.");
            return;
        }
        let temp=this.head;
        while(temp!=null && temp.data!=nextTo){
            temp=temp.next;
        }
        if(temp==null){
            console.log("value not fount");
            return;
        }
        if(temp==this.tail){
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
            return;
        }
        newNode.next=temp.next;
        newNode.prev=temp;
        temp.next.prev=newNode;
        temp.next=newNode;
    }
    displayReverse(){
        let temp=this.tail;
        while(temp){
            console.log(temp.data);
            temp=temp.prev;
        }
    }

}

const list=new DLinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);

list.display()
console.log("------------------------");
list.displayReverse()