import * as actions from '../../actions/routinesActions'
import { put, call } from 'redux-saga/effects'
import { loadRoutines, addRoutine, removeRoutine } from '../../api/routines'

export function * loadRoutinesSaga () {
  yield put(actions.loadRoutinesStart())
  try {
    const routines = yield call(loadRoutines)
    yield put(actions.loadRoutinesSuccess(routines))
  } catch (error) {
    yield put(actions.loadRoutinesFail(error))
  }
}

export function * addRoutineSaga ({ routine }) {
  yield put(actions.addRoutineStart())
  try {
    yield call(addRoutine, routine)
    yield put(actions.addRoutineSuccess(routine))
  } catch (error) {
    yield put(actions.addRoutineFail(error))
  }
}

export function * removeRoutineSaga (routine) {
  yield put(actions.removeRoutineStart())
  try {
    yield call(removeRoutine, routine)
    yield put(actions.removeRoutineSuccess(routine))
  } catch (error) {
    yield put(actions.removeRoutineFail(error))
  }
}
