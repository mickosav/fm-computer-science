// http://btholt.github.io/four-semesters-of-cs/

/*
  Exercise 1: Recursion
The first line of (almost) every recursion will be the base case.
The base case is when you stop recursing and the reason you write it first is
because if you don't write it you'll get stack overflows.

You have to have a base case and you want it very well handled.
*/

// factorial n * (n-1) * (n-2) * ... 3, 2, 1
function factorial(n) {
	if (n <= 1) {
		return 1
	}

	return n * factorial(n - 1)
}

function fibonacci(n) {
	if (n <= 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}

/*
  Exercise 2: Bubble Sort (will never use)

Compare two adjacent numbers next to each other and then
swapp their places if the smaller index's value
is larger than the larger index's value
*/

function bubbleSort(arr) {
	let swapped
	do {
		swapped = false
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				;[ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ]
				swapped = true
			}
		}
	} while (swapped)

	return arr
}

/*
  Exercise 3: Insertion sort (occasionally useful)
Highly effective with data sets that are partially sorted.

The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list ends. The inner
loop goes over the sorted part of the list and inserts first item after sorted part into the correct position.
*/

// [4, 2, 3, 1, 5]
// [2, 4, 3, 1, 5]
// [2, 3, 4, 1, 5]
// [2, 3, 4, 5]
// [2, 3, 4, 5]
function insertionSort(arr) {
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		for (let k = 0; k <= i; k++) {
			if (arr[i + 1] < arr[k]) {
				const spliced = arr.splice(i + 1, 1)[0]
				arr.splice(k, 0, spliced)

				break
			}
		}
	}
}

/*
  Exercise 4: Merge Sort - very useful
You're going to take your big list, and first divide down in two half size lists
and recursively call merge sort on those smaller list, which in turn will do the same.
The base case is when you have a list of one, at which point you will return that sorted list of one.
*/

function mergeSort(arr) {
	const length = arr.length
	if (length <= 1) return arr

	const middle = Math.round(length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)

	const sortedLeft = mergeSort(left)
	const sortedRight = mergeSort(right)

	return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
	const results = []

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift())
		} else {
			results.push(right.shift())
		}
	}

	// one of the arrays is empty, but we don't care which one
	// we want to add the one that isn't to results arr
	return [ ...results, ...left, ...right ]
}

/*  Exercise 5: Quick sort - very useful
The basic gist is that you take the last element in the list and call that the pivot.
Everything that's smaller than the pivot gets put into a "left" list and everything that's greater get's put in a "right" list.
You then call quick sort on the left and right lists independently (hence the recursion.)
After those two sorts come back, you concatenate the sorted left list, the pivot,
and then the right list (in that order.) The base case is when you have a list of length 1 or 0,
where you just return the list given to you.
*/

function quickSort (arr) {
	const length = arr.length
	if (length <= 1) return arr

	const pivot = arr.pop()
	const lessOrEqual = []
	const bigger = []

	arr.forEach(n => n < pivot ? lessOrEqual.push(n) : bigger.push(n))


	return [ ...quickSort(lessOrEqual), pivot, ...quickSort(bigger) ]
}
