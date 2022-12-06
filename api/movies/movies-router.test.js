const db = require('../../data/db-config')
const request = require('supertest')
const server = require('../server.js')
const Movie = require('./movies-model')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe('server/environment', () => {
    test('environment is setup correctly', () => {
        expect(process.env.NODE_ENV).toBe('testing')
    })
    test('[GET] router connected to server', async () => {
        const goodPath = await request(server).get('/api/movies')
        expect(goodPath.status).toBe(200)
        expect(goodPath.body).toHaveLength(9)
        const badPath = await request(server).get('/movies')
        expect(badPath.status).toBe(404)
    })
    test.todo('error handling connected properly')
})

describe('[GET]:id grabbing proper movie', () => {
    test('get movie with id', async () => {
        const result = await request(server).get('/api/movies/1')
        const result2 = await request(server).get('/api/movies/2')
        expect(result.body).toMatchObject({ Top_Ten: null, id: 1, title: "Saving Private Ryan" })
        expect(result2.body).toMatchObject({ Top_Ten: 5, id: 2, title: "Forest Gump" })
    })
    test('returns error with invalid id', async () => {
        const badRes = await request(server).get('/api/movies/25')
        expect(badRes.status).toBe(400)
        expect(badRes.body.message).toMatch(/No movie matching ID/i)
    })
})

describe('model testing', () => {
    const newMovie = { Top_Ten: 6, title: 'KungFu Panda' }
    test('list returns all movies', async () => {
        const res = await Movie.list()
        console.log(`LIST`,res)
        expect(res).toHaveLength(9)
    })
    test('returns the new movie', async () => {
        const res = await Movie.add(newMovie)
        expect(res).toMatchObject({id: 10, title: 'KungFu Panda', Top_Ten: 6})
    })
})