class HashTable {
	constructor(size) {
		this.table = new Array(size);
	}

	display() {
		console.log(this.table);
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.table[index]) {
			this.table[index] = [];
		} else {
			// Separate Chaining for collision resolution
			for (let i = 0; i < this.table[index].length; i++) {
				if (this.table[index][i][0] == key) {
					this.table[index][i][1] = value;
					return;
				}
			}
		}
		this.table[index].push([key, value]); 
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % this.table.length;
	}

	get(key) {
		let index = this._hash(key);
		if (this.table[index]) {
			for (let i = 0; i < this.table[index].length; i++) {
				if (this.table[index][i][0] == key) {
					console.log(this.table[index][i][1]);
					return;
				}
			}
		}
		console.log("Key not found");
	}

}

let h = new HashTable(7);
h.set("abin", 20);
h.set("alan", 23);
h.set("alan", 23);

h.set("jishnu", 40);
h.set("ashwin", 30);

h.display();
h.get("alan");
