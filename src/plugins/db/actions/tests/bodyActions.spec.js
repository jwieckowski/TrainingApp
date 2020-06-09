/* globals beforeEach, afterEach, describe, expect */
const mongodb = require('mongo-mock')
const MongoClient = mongodb.MongoClient
const url = process.env.MONGODB_URI || 'mongodb://localhost/test-body-actions'
const app = require('../../../../app.js')

describe('check database body actions interactions', () => {
  let connection
  let db
  let instance

  beforeEach(async () => {
    connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    db = await connection.db('test')
    instance = await app({ port: 3000 }).ready()
  })

  afterEach(async () => {
    await connection.close()
    await db.close()
    await instance.close()
  })

  it('should insert body data to db', async () => {
    const mockBodyData = {
      _id: 1,
      weight: 80,
      bmi: 20,
      fat: 10,
      muscle: 55
    }
    const res = await instance.db.addBodyData(db, mockBodyData)
    expect(res.ops[0]).toEqual(mockBodyData)
    expect(res.insertedCount).toEqual(1)
  })

  it('should not insert record with duplicated id', async () => {
    const mockBodyData = {
      _id: 2,
      weight: 84,
      bmi: 20,
      fat: 9,
      muscle: 56
    }
    const res1 = await instance.db.addBodyData(db, mockBodyData)
    try {
      await instance.db.addRoutine(db, mockBodyData)
    } catch (e) {
      expect(e).toBeDefined()
    }

    expect(res1.ops[0]).toEqual(mockBodyData)
  })

  it('should return all body data from db', async () => {
    const res = await instance.db.getBodyData(db)
    expect(res.length).toEqual(2)
  })

  it('should update body data with given id', async () => {
    const mockBodyData = {
      _id: 2,
      weight: 83,
      bmi: 20,
      fat: 9,
      muscle: 57
    }
    const res1 = await instance.db.updateBodyData(db, mockBodyData)
    expect(res1.result.n).toEqual(1)
  })

  it('should not update body data when given id is not in db', async () => {
    const mockBodyData = {
      _id: 100,
      weight: 83,
      bmi: 20,
      fat: 9,
      muscle: 57
    }
    const res1 = await instance.db.removeRoutine(db, mockBodyData)
    expect(res1.result.n).toEqual(0)
  })
})
