// http://btholt.github.io/four-semesters-of-cs/

/*
  Exercise 1: Recursion
The first line of (almost) every recursion will be the base case.
The base case is when you stop recursing and the reason you write it first is
because if you don't write it you'll get stack overflows.

You have to have a base case and you want it very well handled.
*/

// factorial n * (n-1) * (n-2) * ... 3, 2, 1
function factorial (n) {
  if (n <= 1) {
    return 1
  }

  return n * factorial(n - 1)
}

function fibonacci (n) {
  if (n <= 2) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}

/*
  Exercise 2: Bubble Sort (will never use)

Compare two adjacent numbers next to each other and then
swapp their places if the smaller index's value
is larger than the larger index's value
*/

function bubbleSort (arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
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
function insertionSort (arr) {
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

*/