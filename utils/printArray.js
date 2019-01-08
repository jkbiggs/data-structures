// utility for printing an array

function printArray(array) {
    let line = ''
    for(let i = 0; i < array.length; i++) {
        line += array[i] + ' '
    }
    console.log(line)
}

module.exports = printArray