// fizzbuzz.json by Aakash Sudhakar
// Written in JavaScript; I am not too familiar with Python so I am writing this as a JSON file.

// 	PSEUDOCODE:
// 	
// 	function "fizzbuzz" takes two arguments: (start & end)
// 		Initialize i as our increment counter.	
// 	
// 		For start up to end, inclusive, incrementing by 1 each loop:
// 			If i is divisible by 15, print "fizzbuzz"
// 			Else if i is divisible by 5, print "buzz"
// 			Else if i is divisible by 3, print "fizz"
// 			Else, print the number's value

// ======================================================================================================

function fizzbuzz(start, end) {
	var i;

	for (i = start; i <= end; i++) {
		if (i % 15 == 0) {
			console.log("fizzbuzz");
		} else if (i % 5 == 0) {
			console.log("buzz");
		} else if (i % 3 == 0) {
			console.log("fizz");
		} else {
			console.log(i);
		}
	}
}

fizzbuzz(1, 30)