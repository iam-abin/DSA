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