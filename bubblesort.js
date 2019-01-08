// Bubble sort

// loop through the array
// if this item > next item, swap them
// indicate a swap occurred
// If a swap occurred, loop through array again
// continue until no swaps remain
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

function printArray(array) {
    let line = ''
    for(let i = 0; i < array.length; i++) {
        line += array[i] + ' '
    }
    console.log(line)
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

bubbleSort(numbers)