// functions.js by Aakash Sudhakar.
// Made using JavaScript as opposed to Python because I do not know much Python.

// Solution to Problem #8:

function fibonacci_iterative(num) {
	var i;
	var sumTwoBack = 1;
	var sumOneBack = 2;
	var sumNew;

	if (num > 2) {
		for (i = 2; i < num; i++) {
			sumNew = sumTwoBack + sumOneBack;
			console.log(sumNew + "/n");
			sumTwoBack = sumOneBack;
			sumOneBack = sumNew;
		}
	} else if (num = 2) {
		console.log(sumTwoBack + "/n" + sumOneBack);
	} else {
		console.log(sumTwoBack);
	}
}

fibonacci_iterative(7);

// "Solution" to Problem #9:

// I have no idea how to call this from the command line but that sounds super cool. Can't wait to learn that!
