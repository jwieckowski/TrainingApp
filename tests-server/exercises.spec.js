/* globals beforeEach, describe, test, expect */
const app = require('./../src/app.js')

describe('/api/v1/exercises', function () {
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
      url: '/api/v1/exercises'
    })

    expect(result.statusCode).toBe(200)
    expect(typeof (JSON.parse(result.payload))).toBe('object')
  })
})
