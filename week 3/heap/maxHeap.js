class MaxHeap {
	constructor() {
		this.heap = [];
	}

	getMax() {
		return this.heap[0];
	}

	display() {
		console.log(this.heap);
	}

	insert(data) {
		this.heap.push(data);
		let childIdx = this.heap.length - 1;
		while (childIdx > 0) {
			let parentIdx = Math.floor((childIdx - 1) / 2);
			if (this.heap[parentIdx] < this.heap[childIdx]) {
				[this.heap[parentIdx], this.heap[childIdx]] = [ this.heap[childIdx], this.heap[parentIdx] ];
				childIdx = parentIdx;
			} else {
				break;
			}
		}
	}

	removeMax() {
		if (this.heap.length == 0) {
			return null;
		} else if (this.heap.length === 1) {
			return this.heap.pop();
		} else {
			let max = this.heap[0];
			this.heap[0] = this.heap.pop();
			let parentIdx = 0;
			while (true) {
				let leftChileIdx = 2 * parentIdx + 1;
				let rightChileIdx = 2 * parentIdx + 2;
				let largestChildIdx = null;

				if (leftChileIdx < this.heap.length) {
					largestChildIdx = leftChileIdx;
				}
				if ( rightChileIdx < this.heap.length && this.heap[rightChileIdx] > this.heap[leftChileIdx] ) {
					largestChildIdx = rightChileIdx;
				}
				if (largestChildIdx == null) {
					break;
				}
				if (this.heap[parentIdx] < this.heap[largestChildIdx]) {
					[this.heap[parentIdx], this.heap[largestChildIdx]] = [ this.heap[largestChildIdx], this.heap[parentIdx] ];
					parentIdx = largestChildIdx;
				} else {
					break;
				}
			}

			return max;
		}
	}
}

let m = new MaxHeap();
m.insert(20);
m.insert(10);
m.insert(40);
m.insert(30);
m.display();
