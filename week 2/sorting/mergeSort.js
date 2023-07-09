function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2)
    let leftArray = []
    let rightArray = []
    let i = 0;
    let j = 0

    for (i; i < arr.length; i++) {
        if (i < mid) {
            leftArray[i] = arr[i];
        } else {
            rightArray[j] = arr[i];
            j++;
        }
    }

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[i + j] = arr1[i];
            i++
        } else {
            result[i + j] = arr2[j];
            j++
        }
    }

    while (i < arr1.length) {
        result[i + j] = arr1[i];
        i++
    }

    while (j < arr2.length) {
        result[i + j] = arr2[j];
        j++
    }

    return result
}


let arr = [5, 3, 2, 1, 8, 6]
console.log(mergeSort(arr));
