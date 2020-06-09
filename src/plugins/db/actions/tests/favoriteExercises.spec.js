/* globals beforeEach, afterEach, describe, expect */
const mongodb = require('mongo-mock')
const MongoClient = mongodb.MongoClient
const url = process.env.MONGODB_URI || 'mongodb://localhost/test-favorite-exercises'
const app = require('../../../../app.js')

describe('check database favorite exercises interactions', () => {
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

  it('should insert favorite exercise to db', async () => {
    const id = 5
    const response = { _id: id }
    const res = await instance.db.addFavoriteExercise(db, id)
    expect(res.ops[0]).toEqual(response)
    expect(res.insertedCount).toEqual(1)
  })

  it('should not insert record with duplicated id', async () => {
    const id = 6
    const response = { _id: id }
    const res1 = await instance.db.addFavoriteExercise(db, id)
    try {
      await instance.db.addFavoriteExercise(db, id)
    } catch (e) {
      expect(e).toBeDefined()
    }

    expect(res1.ops[0]).toEqual(response)
  })

  it('should return all favorite exercises from db', async () => {
    const res = await instance.db.getFavoriteExercises(db)
    expect(res.length).toEqual(2)
  })

  it('should remove favorite exercises with given id', async () => {
    const id = 5
    const res1 = await instance.db.removeFavoriteExercise(db, id)
    expect(res1.result.n).toEqual(1)
  })

  it('should not remove favorite exercise when given id is not in db', async () => {
    const id = 1
    const res1 = await instance.db.removeFavoriteExercise(db, id)
    expect(res1.result.n).toEqual(0)
  })
})
