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