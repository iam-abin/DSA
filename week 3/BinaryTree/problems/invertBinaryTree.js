function invert(bTree) {
    if (!bTree) return bTree;

    // swap values
    [bTree.left.value, bTree.right.value] = [bTree.right.value, bTree.left.value];

    // Recursively invert the subtrees
    invert(bTree.left);
    invert(bTree.right);
    return bTree;
}

const binaryTree = {
    value: 10,
    left: {
        value: 5,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 7,
            left: null,
            right: null,
        },
    },
    right: {
        value: 15,
        left: {
            value: 12,
            left: null,
            right: null,
        },
        right: {
            value: 18,
            left: null,
            right: null,
        },
    },
};

console.log(invert(binaryTree));
