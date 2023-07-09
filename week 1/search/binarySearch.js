function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + (end - start) / 2))

        if (key == arr[mid]) {
            return mid;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1;
}


const array = [10, 20, 30, 40, 50];
let key = 50;
let index = binarySearch(array, key);
if (index >= 0) {
    console.log(`item found at ${index} index.`);
} else {
    console.log("not found.");
}