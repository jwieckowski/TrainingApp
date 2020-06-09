/* globals beforeEach, describe, test, expect */
const app = require('./../src/app.js')

describe('/api/v1/body', function () {
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
      url: '/api/v1/body'
    })

    expect(result.statusCode).toBe(200)
    expect(typeof (JSON.parse(result.payload))).toBe('object')
  })

  test('post request with number in param should return status 200', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/body/5',
      body: {
        _id: 5,
        weight: 80,
        bmi: 20,
        fat: 10,
        muscle: 55
      }
    })

    expect(result.statusCode).toBe(200)
  })

  test('post request with existing record in db and number in param should return status 200 and update record', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/body/5',
      body: {
        _id: 5,
        weight: 83,
        bmi: 20,
        fat: 12,
        muscle: 54
      }
    })

    expect(result.statusCode).toBe(200)
  })

  test('post request with no param should return status 404', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/body'
    })

    expect(result.statusCode).toBe(404)
  })

  test('post request with text in param should return status 400', async function () {
    const result = await instance.inject({
      method: 'POST',
      url: '/api/v1/body/param'
    })

    expect(result.statusCode).toBe(400)
  })
})
