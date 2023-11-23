function changeString(str, changeAfter, word) {
    let newStr = "";
    let compare = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            compare += str[i];
            newStr += str[i];
        } else {
            if (changeAfter === compare) {
                newStr += " " + word;
                compare = ""
                break;
            } else {
                newStr += " ";
                compare = "";
            }
        }
    }

    // Check for the last word in the string 
    if (changeAfter === compare) {
        newStr += " " + word;
    }

    return newStr;
}

let str = "my name is abin";
let changeAfter = "abin";
let word = "hi";
console.log(changeString(str, changeAfter, word));
