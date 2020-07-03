import axios from 'axios'

export function * loadRecords () {
  const res = yield axios.get('api/v1/records')
  return res.data
}

export function * addRecord (record) {
  const res = yield axios.post(`api/v1/records/${record._id}`, {
    _id: record._id,
    max: record.max,
    weight: record.weight
  })
  return res
}
