class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // insert
    insert(data) {

        let currentNode = this.root;
        if (currentNode == null) {
            this.root = new Node(data);
            return;
        }

        while (true) {
            if (data < currentNode.data) {
                if (currentNode.left == null) {
                    currentNode.left = new Node(data);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right == null) {
                    currentNode.right = new Node(data);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // to check value is present in tree or not
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

    // remove a node
    remove(data) {
        return this._removeHelper(data, this.root, null);

    }

    _removeHelper(data, currentNode, parentNode) {
        while (currentNode != null) {
            if (data < currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.left != null && currentNode.right != null) {
                    currentNode.data = this._getMinValue(currentNode.right);
                    this._removeHelper(currentNode.data, currentNode.right, currentNode);

                } else {
                    if (parentNode == null) {
                        if (currentNode.left == null) {
                            this.root = currentNode.right;
                        } else {
                            this.root = currentNode.left;
                        }

                    } else {                          // very confusing are
                        if (parentNode.left == currentNode) {
                            if (currentNode.left == null) {
                                parentNode.left = currentNode.right;
                            } else {
                                parentNode.left = currentNode.left;
                            }
                        } else {
                            if (currentNode.left == null) {
                                parentNode.right = currentNode.right; //check
                            } else {
                                parentNode.right = currentNode.left;
                            }

                        }
                    }
                }
                break; //why

            }
        }


    }

    _getMinValue(currentNode) {
        {
            if (currentNode.left == null) {
                return currentNode.data;
            } else {
                return this._getMinValue(currentNode.left)
            }
        }

    }



    // find minimum and maximum element
    min() {
        return this._minHelper(this.root);
    }

    _minHelper(currentNode) {
        if (currentNode.left == null) {
            return currentNode.data
        }
        return this._minHelper(currentNode.left)
    }

    max() {
        return this._maxHelper(this.root);
    }

    _maxHelper(current) {
        if (!current.right) {
            return current.data;
        } else {
            return this._maxHelper(current.right)
        }
    }

    // traversal
    inOrder() {

    }
    _inOrderHelper() {

    }


    preOrder() {

    }
    _preOrderHelper() {

    }


    postOrder() {

    }
    _postOrderHelper() {

    }






}

const t = new Tree()
t.insert(10)
t.insert(20)
t.insert(9)
t.insert(11)
t.insert(30)
t.insert(1)
t.insert(12)
t.remove(10)
console.log(t.contains(10)); 
