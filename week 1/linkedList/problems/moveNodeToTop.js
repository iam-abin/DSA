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

	// to move a node to top ie, to make it as head
	moveNodeToTop(data) {
		let temp = this.head;
		let prev = null;

		while (temp != null && temp.data != data) {
			prev = temp;
			temp = temp.next;
		}


		if (temp == null) {
			console.log("value not found");
			return;
		}

        if(temp == this.head){
            return
        }

        

		// move node to top
		prev.next = temp.next;
		temp.next = this.head;
		this.head = temp;
	}
}

const list = new LinkedList();

list.addNode(8);
list.addNode(1);
list.addNode(5);
list.addNode(1);
list.addNode(3);
list.addNode(7);

list.display();
list.moveNodeToTop(3)

console.log("----------");
list.display();