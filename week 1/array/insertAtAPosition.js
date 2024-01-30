const insertAt = (arr, pos, data) => {
	if (pos < 0 || pos > arr.length) {
		return `position should be between 1 and ${arr.length}`;
	}

	for (let i = arr.length - 1; i >= pos; i--) {
		arr[i + 1] = arr[i];
	}
	arr[pos] = data;
	return arr;
};

let arr = [10, 20, 30, 40, 50];
console.log(insertAt(arr, 6, 1000));
