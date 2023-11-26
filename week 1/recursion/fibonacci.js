function fibonacci(n) {
	if (n <= 1) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

const num = 10;
for (let i = 0; i < num; i++) {
	console.log(fibonacci(i));
}
