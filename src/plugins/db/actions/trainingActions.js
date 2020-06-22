const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-training`

async function getTrainings (db) {
  return db.collection(collectionName).find({}).toArray()
}

async function addTraining (db, data) {
  return db.collection(collectionName).insertOne(data)
}

async function dropTrainings (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getTrainings,
  addTraining,
  dropTrainings
}
