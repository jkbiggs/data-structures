const printArray = require('./utils/printArray')

// Quick Sort

// We receive an array and pick a "pivot"
// Items are compared to the pivot
// If an item is less than the pivot, put it int the "left" array
// else put into the "right" array 
// Return the array resulting from the quicksort called on the left, the pivot, and the quicksort on the right

function quickSort(array) {
    printArray(array)
    
    if (array.length < 2) {
        return array
    }
    
    const pivotIndex = array.length - 1
    const pivot = array[pivotIndex]
    const left = []
    const right = []

    for (let i = 0; i < pivotIndex; i++) {
        const currentItem = array[i]
        currentItem < pivot ? left.push(currentItem) : right.push(currentItem)
    }

    const result = [...quickSort(left), pivot, ...quickSort(right)]
    printArray(result)
    return  result
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

quickSort(numbers)