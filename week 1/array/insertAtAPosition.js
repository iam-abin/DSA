let arr=[10,20,30,40]
console.log(arr.length);
let value=1000;
let pos=1;
for(let i=arr.length-1;i>=pos;i--){
    arr[i+1]=arr[i]
}

arr[pos]=value;

console.log(arr);