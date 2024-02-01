class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert
    insert(data) {
        const newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(currentNode, newNode) {  // currentNode will be a tree or subtree
        if (newNode.data < currentNode.data) {
            if (currentNode.left == null) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right == null) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }

    // search
    contains(data) {
        let currentNode = this.root;
        while (currentNode != null) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    delete(data) {
        this.root = this._deleteNode(this.root, data);
    }

    _deleteNode(currentNode, data) {
        if (data < currentNode.data) {
            currentNode.left = this._deleteNode(currentNode.left, data)
        } else if (data > currentNode.data) {
            currentNode.right = this._deleteNode(currentNode.right, data);
        } else {
            if (currentNode.left == null && currentNode.right == null) {
                return null;
            }

            if (currentNode.left = null) {
                return currentNode.right;
            }

            if (currentNode.right = null) {
                return currentNode.left;
            }

            currentNode.data = this._min(currentNode.right);
            currentNode.right = this._deleteNode(currentNode.right, currentNode.data);
        }

        return currentNode
    }

    _min(currentNode) {
        if (currentNode.left == null) {
            return currentNode.data;
        } else {
            return this._min(currentNode.left);
        }
    }

    inOrder() {
        this._inOrderHelper(this.root);
    }


    _inOrderHelper(root) {
        if (root != null) {
            this._inOrderHelper(root.left);
            console.log(root.data);
            this._inOrderHelper(root.right);
        }
    }

    preOrder() {
        this._preOrderHelper(this.root);
    }

    _preOrderHelper(root) {
        if (root != null) {
            console.log(root.data);
            this._preOrderHelper(root.left);
            this._preOrderHelper(root.right);
        }
    }

    postOrder() {
        this._postOrderHelper(this.root);
    }

    _postOrderHelper(root) {
        if (root != null) {
            this._postOrderHelper(root.left);
            this._postOrderHelper(root.right);
            console.log(root.data);
        }
    }

    levelOrder() {
        let queue = []
        queue.push(this.root);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode.data);

            if (currentNode.left != null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right != null) {
                queue.push(currentNode.right)
            }
        }
    }


    checkBst(root = this.root, min = Number.MAX_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        if (root == null) {
            return true;
        }

        if (root.data < min || root.data > max) {
            return false;
        }

        return this.checkBst(root.left, min, root.data) && this.checkBst(root.right, root.data, max);
    }

    closest(target) {
        let currentNode = this.root;
        let closest = currentNode.data;
        while (currentNode != null) {
            if ( Math.abs(target - currentNode.data) < Math.abs(target - closest) ) {
                closest = currentNode.data;
            }

            if (target < currentNode.data) {
                currentNode = currentNode.left
            } else if (target > currentNode.data) {
                currentNode = currentNode.right
            } else {
                break;
            }
        }
        return closest
    }
}

const t = new BinarySearchTree();
t.insert(10)
t.insert(8)
t.insert(11)
t.insert(4)
t.insert(9)
console.log(t.closest(8));