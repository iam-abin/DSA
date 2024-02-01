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

// 1. Choose any number from the list as your "pivot" (let's say the first one).
// 2. Put all smaller numbers to the left of the pivot and larger numbers to the right.
// 3. For the groups or elements on the left and right of the pivot, repeat steps 1 and 2 (choose a pivot and sort around it).
// 4. Keep Doing This: Keep breaking down the groups into smaller chunks until you have groups of one or zero numbers.
// 5. Combine all the sorted groups (left of the pivot, pivot, and right of the pivot) 
//    to get your fully sorted list.