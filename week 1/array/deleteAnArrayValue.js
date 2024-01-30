const deleteFrom = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			for (let j = i; j < arr.length - 1; j++) {
				arr[j] = arr[j + 1];
			}

			arr.length--;
			break;
		}
	}

	return arr;
};

let arr = [10, 20, 30, 40, 50];
console.log(deleteFrom(arr, 55));
