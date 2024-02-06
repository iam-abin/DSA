function bubbleSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let flag = 0;

		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				flag = 1;
			}
		}
		if (flag == 0) {
			break;
		}
	}
	return arr;
}


let arr = [5, 3, 2, 1, 8, 6];
console.log(bubbleSort(arr));


// Algorithm

// 1. Start.
// 2. Take an unsorted array as input.
// 3. Take first element in the array and compare it with the second element, 
    // if first element > second element then swap.
// 4. Move to the next pair of adjacent elements and repeat step 3 until the end of the list reached.
// 5. in this point last element will be in its correct position in sorted list.
// 6. Repeat 3-4 and stop before sorted sublist reaches.
// 7. Repeat 6 until all are sorted.
// 8. End.