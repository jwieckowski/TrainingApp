import axios from 'axios'

export function * loadBodyData () {
  const res = yield axios.get('api/v1/body')
  return res.data
}

export function * addBodyData (body) {
  const res = yield axios.post(`api/v1/body/${body._id}`, {
    _id: body._id,
    weight: body.weight,
    bmi: body.bmi,
    fat: body.fat,
    muscle: body.muscle
  })
  return res
}
