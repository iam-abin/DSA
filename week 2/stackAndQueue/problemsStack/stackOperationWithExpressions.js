let arr = ["5", "2", "c", "d", "+"]

let stack1 = [];


for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "5") {
        stack1.push(5);
    } else if (arr[i] == "2") {
        stack1.push(2);
    } else if (arr[i] == "c") {
        stack1.pop()
    } else if (arr[i] == "d") {
        stack1.push(stack1.pop() * 2)
    } else {
        stack1.push(stack1.pop() + 5);
    }
}

console.log(stack1);