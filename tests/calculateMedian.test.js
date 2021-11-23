
const calculateMedian = require('../usefulfunction');

describe('calculateMedian', () => {
    it('should return lowest of the midlle number in the array if the array length is even', () => {
        const averages = [2,3,4,5,23,6]
        const median = calculateMedian(averages)
        expect(median).toBe('4')
    })

    it('should return the midlle number in the array if the array length is odd', () => {
        const averages = [4,6,2,8,9,1,4,2,7,2,21,45,32]
        const median = calculateMedian(averages)
        expect(median).toBe('6')
    })

    it('should return the empty string if the array length is 0', () => {
        const averages = []
        const median = calculateMedian(averages)
        expect(median).toBe('')
    })
})
