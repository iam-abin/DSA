function binarySearch(arr, key, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
        return mid;
    } else if (key < arr[mid]) {
        return binarySearch(arr, key, start, mid - 1);
    } else {
        return binarySearch(arr, key, mid + 1, end);
    }
}


const array = [10, 20, 30, 40, 50];
let key = 30;
let index = binarySearch(array, key, 0, array.length - 1);
if (index >= 0) {
    console.log(`item found at ${index} index.`);
} else {
    console.log("not found.");
}