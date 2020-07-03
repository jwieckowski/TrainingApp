/* globals beforeEach, afterEach, describe, expect */
const mongodb = require('mongo-mock')
const MongoClient = mongodb.MongoClient
const url = process.env.MONGODB_URI || 'mongodb://localhost/test-training'
const app = require('../../../../app.js')

describe('check database training interactions', () => {
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

  it('should insert training to db', async () => {
    const mockTraining = {
      _id: 1,
      date: new Date(),
      activeExercises: [0, 1, 2, 3, 4],
      trainingSeries: [[[10, 5], [10, 5]], [[80, 3], [80, 3]], [[50, 5], [50, 5]], [[20, 10]], [[100, 2]]],
      routine: 'User Routine 1',
      routineExercises: [10, 14, 28, 30, 38]
    }
    const res = await instance.db.addTraining(db, mockTraining)
    expect(res.ops[0]).toEqual(mockTraining)
    expect(res.insertedCount).toEqual(1)
  })

  it('should not insert record with duplicated id', async () => {
    const mockTraining = {
      _id: 2,
      date: new Date(),
      activeExercises: [0, 1, 2, 3, 4],
      trainingSeries: [[[10, 5], [10, 5]], [[80, 3], [80, 3]], [[50, 5], [50, 5]], [[20, 10]], [[100, 2]]],
      routine: 'User Routine 1',
      routineExercises: [10, 14, 28, 30, 38]
    }
    const res1 = await instance.db.addTraining(db, mockTraining)
    try {
      await instance.db.addTraining(db, mockTraining)
    } catch (e) {
      expect(e).toBeDefined()
    }

    expect(res1.ops[0]).toEqual(mockTraining)
  })

  it('should return all trainings from db', async () => {
    const res = await instance.db.getTrainings(db)
    expect(res.length).toEqual(2)
  })
})
