function reverse(s){

    let str="";
    for(let i=s.length-1;i>=0;i--){
        str=str+s[i];
    }
    return str;

}


let s="Hello";

console.log(reverse(s));