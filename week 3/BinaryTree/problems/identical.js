class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

function identical(tree1, tree2) {
    if (tree1 == null && tree2 == null) {
        return true;
    }

    if (tree1 == null || tree2 == null) {
        return false;
    }

    if (tree1.data != tree2.data) {
        return false
    }

    return identical(tree1.left, tree2.left) && identical(tree1.right, tree2.right)

}



const root = new BinaryTree(10);
root.left = new BinaryTree(100);
root.right = new BinaryTree(13);
root.left.left = new BinaryTree(14);
root.left.right = new BinaryTree(900);
root.right.left = new BinaryTree(3);
root.right.right = new BinaryTree(1);

const root2 = new BinaryTree(10);
root2.left = new BinaryTree(100);
root2.right = new BinaryTree(13);
root2.left.left = new BinaryTree(14);
root2.left.right = new BinaryTree(900);
root2.right.left = new BinaryTree(3);
root2.right.right = new BinaryTree(1);

console.log(identical(root, root2));



