const arr = [0, 1, 0, 22, 7, 0, 0, 12, 0, 0];

let start = 0;
let end = arr.length - 1;

while (start < end) {
	if (arr[start] === 0) {
		if (arr[end] === 0) {
			end--;
		} else {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
	} else {
		start++;
	}
}

console.log(arr);
