function crateSnakeString(str) {
	let snakeCase = "";
	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];

		if (currentChar.toUpperCase() === currentChar && i != 0) {
			snakeCase += "_" + currentChar.toLowerCase();
		} else {
			snakeCase += currentChar.toLowerCase();
		}
	}
	return snakeCase;
}

const pascalString = "PascalCaseExample";
const snakeString = crateSnakeString(pascalString);
console.log(snakeString);
