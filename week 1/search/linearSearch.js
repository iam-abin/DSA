function search(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            return i;
        }
    }

    return -1;
}

const array = [10, 20, 30, 40, 50];
let key = 50;
let index = search(array, key);
if (index >= 0) {
    console.log(`item found at ${index} index.`);
} else {
    console.log("not found.");
}