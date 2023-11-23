// check whether number of 1's and 0's are equal

function isEqual(arr) {
    let stack = [];

    let l = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            stack.push(arr[i])
            l++;
        } else if (arr[i] === 0) {
            stack.pop()
            l--;
        }
    }
    return l === 0
}



let arr = [1, 0, 1, 0, 1];


console.log(isEqual(arr));