let arr=[10,20,30,40,50]

let pos=2;
for(let i=pos;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr.length--;
console.log(arr);