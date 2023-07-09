function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}



let arr = [5, 3, 2, 1, 8, 6]
console.log(selectionSort(arr));