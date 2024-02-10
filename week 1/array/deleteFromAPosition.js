const deleteFrom = (arr, pos) => {
	if (pos < 1 || pos > arr.length) {
		return `position should be between 1 and ${arr.length}`;
	}

	for (let i = pos; i < arr.length; i++) {
		arr[i-1] = arr[i];
	}
	arr.length--;
	return arr;
};

let arr = [10, 20, 30, 40, 50];
console.log(deleteFrom(arr, 5));
