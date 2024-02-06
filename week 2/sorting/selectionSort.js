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
// 3. Set MIN to location 0.
// 4. Search the minimum element in the list.
// 5. Swap with value at location MIN.
// 6. Increment MIN to point to next element.
// 7. Repeat until the list is sorted.
// 8. End.