function s(str,changeAfter,word){
    let newStr=""
    let compare=""
    for(let i=0;i<str.length;i++){
    
        if(str[i]!=" "){
            compare+=str[i];
            newStr+=str[i];
        }else{
            if(changeAfter==compare){
                newStr+=compare+" ";
            }else{
                newStr+=" "+word;
            }
        }

    }
    return newStr;

}


let str="my name is abin"
let changeAfter="is";
let word="hi"
console.log(s(str,changeAfter,word));