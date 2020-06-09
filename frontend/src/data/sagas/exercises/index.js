import { takeLatest } from 'redux-saga/effects'
import { loadExercisesSaga, refreshExercisesSaga } from './exercisesSaga.js'
import actionTypes from '@constants/actionTypes'

export function * watchExercises () {
  yield takeLatest(actionTypes.EXERCISES_LOAD_ACTION, loadExercisesSaga)
  yield takeLatest(actionTypes.EXERCISES_REFRESH_ACTION, refreshExercisesSaga)
}
