/* globals beforeEach, afterEach, describe, expect */
const mongodb = require('mongo-mock')
const MongoClient = mongodb.MongoClient
const url = process.env.MONGODB_URI || 'mongodb://localhost/test-routines'
const app = require('../../../../app.js')

describe('check database routines interactions', () => {
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

  it('should insert routine to db', async () => {
    const mockRoutine = {
      _id: 5,
      name: 'Routine name',
      label: 'Routine label'
    }
    const res = await instance.db.addRoutine(db, mockRoutine)
    expect(res.ops[0]).toEqual(mockRoutine)
    expect(res.insertedCount).toEqual(1)
  })

  it('should not insert record with duplicated id', async () => {
    const mockRoutine = {
      _id: 4,
      name: 'Routine name',
      label: 'Routine label'
    }
    const res1 = await instance.db.addRoutine(db, mockRoutine)
    try {
      await instance.db.addRoutine(db, mockRoutine)
    } catch (e) {
      expect(e).toBeDefined()
    }

    expect(res1.ops[0]).toEqual(mockRoutine)
  })

  it('should return all routines from db', async () => {
    const res = await instance.db.getRoutines(db)
    expect(res.length).toEqual(2)
  })

  it('should remove routine with given id', async () => {
    const id = 4
    const res1 = await instance.db.removeRoutine(db, id)
    expect(res1.result.n).toEqual(1)
  })

  it('should not remove routine when given id is not in db', async () => {
    const id = 6
    const res1 = await instance.db.removeRoutine(db, id)
    expect(res1.result.n).toEqual(0)
  })
})
