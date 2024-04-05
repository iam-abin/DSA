let arr = [1,2,4,3,2,5,4,0,6]

let num = 3
const set = new Set();
for(let i=0;i<arr.length;i++){
    if(set.has(num-arr[i])){
       console.log(num-arr[i], arr[i]);
       return
    }else{
        set.add(arr[i])
    }
}

