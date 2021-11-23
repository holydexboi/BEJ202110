const express = require('express')
const EventEmitter = require('events')
const helmet = require('helmet')
const compression = require('compression')
const {router, calculateAveragePerTime} = require('./routes/metric')

const emitters = new EventEmitter()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())
app.set('emitter', emitters)
app.use('/metric', router)


let windowDuration = 0


if (app.get('env') === 'development') {
    windowDuration = 10000
}
else if (app.get('env') === 'production') {
    windowDuration = 50
}

emitters.on('start', () => {
    calculateAveragePerTime(windowDuration)
})


const port = process.env.PORT || 3000
const server = app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = server;