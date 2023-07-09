"use strict";
function heapSort(arr) {
    // buildMaxHeap(arr);
    for (let i = arr.length - 1; i >= 1; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, i, 0);
    }
    return arr;
}

// function buildMaxHeap(arr) {
//     for (let i = getParent(arr.length-1); i >= 0; i--) {
//         maxHeapify(arr, arr.length, i);
//     }
// }

function getParent(i){
    return Math.floor((i-1)/2)
}
function maxHeapify(arr, n, i) {
    let parent = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    
    if(rightChild < n && arr[rightChild] > arr[parent]) {
        parent = rightChild;
    } else if(leftChild < n && arr[leftChild] > arr[parent]) {
        parent = leftChild;
    }


    if (parent !== i) {
        [arr[i], arr[parent]] = [arr[parent], arr[i]];
        maxHeapify(arr, n, parent);
    }
}

console.log(heapSort([20,10,40,30,60]));