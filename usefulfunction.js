
function calculateMedian(averagesArray) {
    const averagesArrayCopy = [...averagesArray]

    if (averagesArrayCopy.length === 0) {
        
        return ('')
    }
    averagesArrayCopy.sort(function (a, b) { return a - b })
    const remainder = averagesArrayCopy.length % 2
    let median = ''
    if (remainder !== 0) {
        const result = Math.round(averagesArrayCopy.length / 2)
        median = averagesArrayCopy[result - 1].toString()
        return median
        
    }
    if (remainder === 0) {
        const result = averagesArrayCopy.length / 2
        median = averagesArrayCopy[result - 1].toString()
        return median
    }
}

module.exports = calculateMedian