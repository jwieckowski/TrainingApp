import * as actions from '../../actions/routinesActions'
import { put, call } from 'redux-saga/effects'
import { loadRoutines, addRoutine, updateRoutine, removeRoutine } from '../../api/routines'

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

export function * createRoutinesListSaga ({ id }) {
  yield put(actions.createRoutineListStart(id))
}

export function * saveExerciseRoutinesListSaga ({ routine }) {
  yield put(actions.saveExerciseRoutineListStart())
  try {
    yield call(updateRoutine, routine)
    yield put(actions.saveExerciseRoutineListSuccess(routine))
  } catch (error) {
    yield put(actions.saveExerciseRoutineListFail(error))
  }
}

export function * addExerciseRoutinesListSaga ({ id }) {
  yield put(actions.addExerciseRoutineListStart(id))
  try {
    yield put(actions.addExerciseRoutineListSuccess(id))
  } catch (error) {
    yield put(actions.addExerciseRoutineListFail(error))
  }
}

export function * removeExerciseRoutinesListSaga ({ id }) {
  yield put(actions.removeExerciseRoutineListStart(id))
  try {
    yield put(actions.removeExerciseRoutineListSuccess(id))
  } catch (error) {
    yield put(actions.removeExerciseRoutineListFail(error))
  }
}

export function * chooseActiveRoutineSaga ({ id }) {
}
