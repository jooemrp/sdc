export function getRandomColor() {
	const arr = ["sips-orange", "sips-navy", "sips-green", "sips-maroon"];

	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}

export function truncateString(str, n) {
	return str.length > n ? str.slice(0, n - 1) + "..." : str;
}
