import { takeLatest } from 'redux-saga/effects'
import { loadRoutinesSaga, addRoutineSaga, removeRoutineSaga } from './routinesSaga'
import actionTypes from '@constants/actionTypes'

export function * watchRoutines () {
  yield takeLatest(actionTypes.ROUTINES_LOAD_ACTION, loadRoutinesSaga)
  yield takeLatest(actionTypes.ROUTINE_ADD_ACTION, addRoutineSaga)
  yield takeLatest(actionTypes.ROUTINE_REMOVE_ACTION, removeRoutineSaga)
}
