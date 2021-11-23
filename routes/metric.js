const express = require('express')
const calculateMedian = require('../usefulfunction')

const router = express.Router()

let startTime = false
const metricArray = []
const averagesArray = []


function calculateAveragePerTime(windowDuration) {
    
    setInterval(() => {
    
        const sum = metricArray.reduce((acc, current) => {
            return acc + current;
        }, 0)
        const count = metricArray.length
        metricArray.length = 0
        const averages = sum / count
        if (!Number.isNaN(averages)) {
            averagesArray.push(averages)
        }
         
    }, windowDuration)
}


router.post('/', (req, res) => {
    const emitter = req.app.get('emitter')

    if (startTime === false) {

        emitter.emit('start')
        startTime = true
    }


    const value = parseInt(req.body.value)
    if (Number.isNaN(value)) return res.status(400).send('Enter a valid number')
    metricArray.push(value)
    res.send('')
    
})

router.get('/median', (req, res) => {
    
    const median = calculateMedian(averagesArray)
    res.status(200).send(median)
})

router.delete('/', (req, res) => {
    averagesArray.length = 0
    res.sendStatus(200)

})

module.exports.router = router
module.exports.averagesArray = averagesArray
module.exports.calculateAveragePerTime = calculateAveragePerTime
