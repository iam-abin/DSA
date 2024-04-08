// An anagram is a word or phrase formed by rearranging the letters of another word or phrase

// "listen" is an anagram of "silent".
// "debit card" is an anagram of "bad credit".

function checkAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	str1 = str1.split("").sort().join("");
	str2 = str2.split("").sort().join("");

    return str1 === str2
}

console.log(checkAnagram("abin", "abni"));