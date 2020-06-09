import * as actions from '../../actions/exercisesActions'
import { put, call } from 'redux-saga/effects'
import { loadExercises } from '../../api/exercises'

export function * loadExercisesSaga () {
  yield put(actions.loadExercisesStart())
  try {
    const exercises = yield call(loadExercises)
    yield put(actions.loadExercisesSuccess(exercises))
  } catch (error) {
    yield put(actions.loadExercisesFail(error))
  }
}

export function * refreshExercisesSaga () {
  yield put(actions.refreshExercisesStart())
  try {
    const exercises = yield call(loadExercises)
    yield put(actions.refreshExercisesSuccess(exercises))
  } catch (error) {
    yield put(actions.refreshExercisesFail(error))
  }
}
