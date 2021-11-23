const request = require('supertest');
const { averagesArray } = require('../routes/metric');
let server;

describe('/metric', () => {
    beforeEach(() => { server = require('../index') })
    afterEach(() => { server.close() })
    
    describe('GET /median', () => {
        it('should return median of all averages', async () => {
            averagesArray.push(2, 3, 4, 7, 1, 3)
            
            const res = await request(server).get('/metric/median')
            expect(res.status).toBe(200)
        })
    });

    describe('POST /', () => {
        it('should return 400 if value is not a number', async () => {

            const res = await request(server)
                .post('/metric')
                .send({ value: 'dea' })
            
            expect(res.status).toBe(400)
        })
    })


})