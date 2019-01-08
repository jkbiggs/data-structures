// Bubble sort
const printArray = require('./utils/printArray')

// loop through the array
// if this item > next item, swap them
// indicate a swap occurred
// If a swap occurred, loop through array again
// continue until no swaps remain O(n^2)
function bubbleSort(array) {
    let swapped = false

    do { 
        swapped = false

        array.forEach((item, index) => {
            printArray(array)
            if (item > array[index + 1]) {
                const temporary = item

                array[index] = array[index + 1]
                array[index + 1] = temporary
                swapped = true
            }
        })
    } while (swapped)

    return array
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

bubbleSort(numbers)