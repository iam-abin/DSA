function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = 0;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = 1;
            }
        }
        if (flag == 0) {
            break;
        }

    }
    return arr;
}


let arr = [5, 3, 2, 1, 8, 6]
console.log(bubbleSort(arr));