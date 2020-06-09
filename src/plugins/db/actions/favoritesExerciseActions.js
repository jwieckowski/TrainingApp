const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-favorite-exercises`

async function getFavoriteExercises (db) {
  const res = await db.collection(collectionName).find({}).toArray()
  return res.map(r => {
    r.id = r._id
    delete r._id
    return r
  })
}

async function addFavoriteExercise (db, id) {
  const favorite = { _id: id }
  return db.collection(collectionName).insertOne(favorite)
}

async function removeFavoriteExercise (db, id) {
  return db.collection(collectionName).deleteOne({ _id: id })
}

async function dropFavoriteExercices (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getFavoriteExercises,
  addFavoriteExercise,
  removeFavoriteExercise,
  dropFavoriteExercices
}
