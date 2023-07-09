function firstRecurring(arr) {
    let s = new Map();
    for (let i = 0; i < arr.length; i++) {

        if (s.has(arr[i])) {
            return arr[i];
        } else {
            s.set(arr[i], i)
        }
    }
    return "no such items"
}



let arr = [1, 3, 4, 4, 1, 3]
console.log(firstRecurring(arr));