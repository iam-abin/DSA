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


// Algorithm

// 1. Start.
// 2. Take an unsorted array as input.
// 3. FInd the mid and divide the list into 2 halves using the mid.
// 4. Recursively apply 3 for each halves, until subarrays has only one element.
// 5. Merge the subarrays together by comparing elements from each list and insert into a new
    //  list in sorted order.
// 5. Once all subarrays is merged the entire list is sorted.
// 6. End.