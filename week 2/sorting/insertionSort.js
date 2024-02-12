function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > current ) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr
}


let arr = [5, 3, 2, 1, 8, 6]
console.log(insertionSort(arr));

// Algorithm

// 1. Start.
// 2. Take an unsorted array as input.
// 3. Consider the first element of the array as sorted sub-array of 1 element.
// 4. Take the next element in the array as current element and and compare it with the elements in the sorted subarray.
// 5. if the current element is smaller than an element in the sorted sublist, move all the sorted elements one position ahead
    // to make space for the current element.
// 6. Insert current element in its correct position in the sorted sublist.
// 7. Repeat 4-6 until all are sorted.
// 8. End.