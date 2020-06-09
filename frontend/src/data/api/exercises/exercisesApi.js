import axios from 'axios'

export function * loadExercises () {
  const res = yield axios.get('api/v1/exercises')
  return res.data
}
