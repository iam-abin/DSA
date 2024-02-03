function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = partition(arr, start, end)
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}




let arr = [5, 3, 2, 1, 8, 6]
console.log(quickSort(arr));


// Algorithm

// 1. Start.
// 2. Take an unsorted array as input.
// 3. Choose any number from the list as your "pivot" (let's say the last one).
// 4. Put all numbers smaller tha pivot to the left of the pivot and larger than pivot to the right.
// 5. Recursively apply 3,4 For the list of elements on the left and right of the pivot.
// 5. Once the recursion has reached sub-lists with only one element, the entire list is sorted.
// 6. End.