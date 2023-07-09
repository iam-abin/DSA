class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

function levelOrder() {
    let queue = [];
    queue.push(root);
    let arr = []
    while (queue.length > 0) {
        let curr = queue.shift();
        arr.push(curr.data);

        if (curr.left != null) {
            queue.push(curr.left);
        }
        if (curr.right != null) {
            queue.push(curr.right);
        }
    }

    console.log(arr.sort((a, b) => b - a));
    console.log("Second largest is: " + arr[1]);

}



const root = new BinaryTree(10);
root.left = new BinaryTree(100);
root.right = new BinaryTree(13);
root.left.left = new BinaryTree(14);
root.left.right = new BinaryTree(900);
root.right.left = new BinaryTree(3);
root.right.right = new BinaryTree(1);
levelOrder(root)



