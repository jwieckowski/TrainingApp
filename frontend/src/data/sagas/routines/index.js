import { takeLatest } from 'redux-saga/effects'
import {
  loadRoutinesSaga, addRoutineSaga, removeRoutineSaga,
  createRoutinesListSaga, addExerciseRoutinesListSaga,
  removeExerciseRoutinesListSaga, saveExerciseRoutinesListSaga,
  chooseActiveRoutineSaga
} from './routinesSaga'
import actionTypes from '@constants/actionTypes'

export function * watchRoutines () {
  yield takeLatest(actionTypes.ROUTINES_LOAD_ACTION, loadRoutinesSaga)
  yield takeLatest(actionTypes.ROUTINE_ADD_ACTION, addRoutineSaga)
  yield takeLatest(actionTypes.ROUTINE_REMOVE_ACTION, removeRoutineSaga)
  yield takeLatest(actionTypes.ROUTINE_CREATE_LIST_ACTION, createRoutinesListSaga)
  yield takeLatest(actionTypes.ROUTINE_CREATE_ADD_ACTION, addExerciseRoutinesListSaga)
  yield takeLatest(actionTypes.ROUTINE_CREATE_REMOVE_ACTION, removeExerciseRoutinesListSaga)
  yield takeLatest(actionTypes.ROUTINE_CREATE_SAVE_ACTION, saveExerciseRoutinesListSaga)
  yield takeLatest(actionTypes.ROUTINE_CHOOSE_ACTIVE, chooseActiveRoutineSaga)
}
