import axios from 'axios'

export function * loadRoutines () {
  const res = yield axios.get('api/v1/routines')
  return res.data
}

export function * addRoutine (routine) {
  const res = yield axios.post(`api/v1/routines/${routine._id}`, {
    _id: routine._id,
    name: routine.name,
    label: routine.label
  })
  return res
}

export function * removeRoutine (routine) {
  const res = yield axios.delete(`api/v1/routines/${routine.id}`)
  return res
}
