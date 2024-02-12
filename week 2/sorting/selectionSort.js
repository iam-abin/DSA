function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}



let arr = [5, 3, 2, 1, 8, 6]
console.log(selectionSort(arr));


// Algorithm

// 1. Start.
// 2. Take an unsorted array as input.
// 3. Find the minimum element from the unsorted array and swap it with first element of the unsorted subarray.
// 4. Now first element is in its sorted position. and the remaining elements are in unsorted array
// 5. Apply step 3 for the unsorted subarray until all elements are become sorted
// 6. End.
