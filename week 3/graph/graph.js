class Graph {
    constructor() {
        this.map = new Map();
    }

    addVertex(vertex) {
        if (!this.map.has(vertex)) {
            this.map.set(vertex, new Set());
        }
    }

    deleteVertex(vertex) {
        if (this.map.has(vertex)) {
            for (const i of this.map.get(vertex)) {
                this.map.get(i).delete(vertex);
            }
            this.map.delete(vertex);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.map.has(vertex1) && this.map.has(vertex2)) {
            this.map.get(vertex1).add(vertex2);
            this.map.get(vertex2).add(vertex1);
        }
    }

    deleteEdge(vertex1, vertex2) {
        if (this.map.has(vertex1) && this.map.has(vertex2)) {
            this.map.get(vertex1).delete(vertex2);
            this.map.get(vertex2).delete(vertex1);
        }
    }

    display() {
        for (let i of this.map.keys()) {
            console.log(i + " : " + Array.from(this.map.get(i)));
        }
    }

    bfs(startNode) {
        let queue = [];
        let visited = new Set();

        queue.push(startNode);
        visited.add(startNode);
        while (queue.length > 0) {
            let curr = queue.shift();
            console.log(curr);

            for (let subNode of this.map.get(curr)) {
                if (!visited.has(subNode)) {
                    visited.add(subNode);
                    queue.push(subNode);
                }
            }
        }
    }

    dfs(startNode) {
        let stack = []
        let visited = new Set()

        stack.push(startNode);
        while (stack.length > 0) {
            let curr = stack.pop()
            if (!visited.has(curr)) {
                visited.add(curr)
                console.log(curr);
                for (const subNode of this.map.get(curr)) {
                    stack.push(subNode)
                }
            }
        }
    }

}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(3);
g.addVertex(2);
g.addVertex(5);
g.addVertex(4);
g.addVertex(6);
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 3);
g.addEdge(1, 6);
g.addEdge(1, 5);
g.addEdge(3, 2);
g.addEdge(3, 4);
g.addEdge(4, 6);

g.display()
g.bfs(0)
console.log("------------");
g.dfs(0)