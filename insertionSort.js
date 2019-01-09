const printArray = require('./utils/printArray')

// Insertion Sort

// Uses nested loops
// We start at the second item, assuming a sorted list of size 1 (growing by 1 each outer loop pass)
// Compares the next item, and inserts it before or after depending on comparison
// Time complexity O(n^2), slightly better than bubble sort
function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            printArray(array)

            if (array[i] < array[j]) {
                const[item] = array.splice(i, 1)
                array.splice(j, 0, item)
            }
        }
    }

    printArray(array)
    return array
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

insertionSort(numbers)