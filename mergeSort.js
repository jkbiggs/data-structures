const printArray = require('./utils/printArray')

// Merge Sort
// Divides array into two halves: left and right
// Calls mergeSort on these sub arrays until we get 2 arrays that are less than 2 in length
// then we stitch them back together, sorting on the way up
// Time complexity = 0(n log n)

function mergeSort(array) {
    if (array.length < 2) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const sorted = []

    // push the lesser value onto the sorted array
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    
    const results = [...sorted, ...left, ...right]

    console.log(results)

    return results
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

mergeSort(numbers)