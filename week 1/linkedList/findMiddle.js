// prefix tree

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addNode(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
	}

	display() {
		if (!this.head) {
			console.log("List is empty.");
			return;
		}

		let temp = this.head;
		while (temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}

	// using two pointer
	findMiddle(){
        let slowPointer = this.head
        let fastPointer = this.head

        while(fastPointer && fastPointer.next){
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
        }

        return slowPointer.data
	}
}

const list = new LinkedList();

list.addNode(8);
list.addNode(1);
list.addNode(5);
list.addNode(1);
list.addNode(3);
list.addNode(7);
list.addNode(7);
list.addNode(7);
list.addNode(7);

// list.display();

console.log(list.findMiddle());