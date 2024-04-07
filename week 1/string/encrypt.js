function encryptt(str, shift){
    let encryptedString = "";

    for (let i = 0; i < str.length; i++) {
        let  charCode = str.charCodeAt(i);

     
        if (charCode >= 65 && charCode <= 90) { // Encrypt uppercase letters
            encryptedString += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {  // Encrypt lowercase letters
            encryptedString += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        else { // Keep non-alphabetic characters unchanged
            encryptedString += str.charAt(i);
        }
    }

    return encryptedString;
}

let text = "ab3c)"
console.log(encryptt(text, 27));