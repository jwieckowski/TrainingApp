/* globals beforeEach, describe, test, expect */
const app = require('./../src/app.js')

describe('/api/v1/records', function () {
  let instance

  beforeEach(async () => {
    instance = await app({ port: 3000 }).ready()
  })

  afterEach(async () => {
    await instance.close()
  })

  test('get request should return status 200 and object in payload', async function () {
    const result = await instance.inject({
      method: 'GET',
      url: '/api/v1/records'
    })

    expect(result.statusCode).toBe(200)
    expect(typeof (JSON.parse(result.payload))).toBe('object')
  })

  test.skip('post request with number in param should return status 200', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/records/1',
      body: {
        _id: 1,
        max: [10, 1],
        weight: [20, 5]
      }
    })

    expect(result.statusCode).toBe(200)
  })

  test('post request with no param should return status 404', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/records'
    })

    expect(result.statusCode).toBe(404)
  })

  test('post request with text in param should return status 400', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/records/param'
    })

    expect(result.statusCode).toBe(400)
  })
})
