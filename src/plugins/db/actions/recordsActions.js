const appName = process.env.APP_NAME || 'default'
const collectionName = `${appName}-records`

async function getRecords (db) {
  return db.collection(collectionName).find({}).toArray()
}

async function addRecord (db, record) {
  return db.collection(collectionName).insertOne(record)
}

async function updateRecord (db, record) {
  return db.collection(collectionName).updateOne({ _id: parseInt(record._id) }, {
    $set: {
      max: record.max,
      weight: record.weight
    }
  })
}

async function dropRecords (db) {
  return db.collection(collectionName).drop()
}

module.exports = {
  getRecords,
  addRecord,
  updateRecord,
  dropRecords
}
