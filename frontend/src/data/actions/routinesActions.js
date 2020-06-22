import actionTypes from '@constants/actionTypes'

export function loadRoutines () {
  return {
    type: actionTypes.ROUTINES_LOAD_ACTION
  }
}

export function loadRoutinesStart () {
  return {
    type: actionTypes.ROUTINES_LOAD_START
  }
}

export function loadRoutinesSuccess (routines) {
  return {
    type: actionTypes.ROUTINES_LOAD_SUCCESS,
    routines
  }
}

export function loadRoutinesFail (error) {
  return {
    type: actionTypes.ROUTINES_LOAD_FAIL,
    error
  }
}

export function addRoutine (routine) {
  return {
    type: actionTypes.ROUTINE_ADD_ACTION,
    routine
  }
}

export function addRoutineStart () {
  return {
    type: actionTypes.ROUTINE_ADD_START
  }
}

export function addRoutineSuccess (routine) {
  return {
    type: actionTypes.ROUTINE_ADD_SUCCESS,
    routine
  }
}

export function addRoutineFail (error) {
  return {
    type: actionTypes.ROUTINE_ADD_FAIL,
    error
  }
}

export function removeRoutine (id) {
  return {
    type: actionTypes.ROUTINE_REMOVE_ACTION,
    id
  }
}

export function removeRoutineStart () {
  return {
    type: actionTypes.ROUTINE_REMOVE_START
  }
}

export function removeRoutineSuccess (routine) {
  return {
    type: actionTypes.ROUTINE_REMOVE_SUCCESS,
    routine
  }
}

export function removeRoutineFail (error) {
  return {
    type: actionTypes.ROUTINE_REMOVE_FAIL,
    error
  }
}

export function createRoutineList (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_LIST_ACTION,
    id
  }
}

export function createRoutineListStart (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_LIST_START,
    id
  }
}

export function createRoutineListSuccess (routine) {
  return {
    type: actionTypes.ROUTINE_CREATE_LIST_SUCCESS,
    routine
  }
}

export function createRoutineListFail (error) {
  return {
    type: actionTypes.ROUTINE_CREATE_LIST_FAIL,
    error
  }
}

export function saveExerciseRoutineList (routine) {
  return {
    type: actionTypes.ROUTINE_CREATE_SAVE_ACTION,
    routine
  }
}

export function saveExerciseRoutineListStart () {
  return {
    type: actionTypes.ROUTINE_CREATE_SAVE_START
  }
}

export function saveExerciseRoutineListSuccess (routine) {
  return {
    type: actionTypes.ROUTINE_CREATE_SAVE_SUCCESS,
    routine
  }
}

export function saveExerciseRoutineListFail (error) {
  return {
    type: actionTypes.ROUTINE_CREATE_SAVE_FAIL,
    error
  }
}

export function addExerciseRoutineList (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_ADD_ACTION,
    id
  }
}

export function addExerciseRoutineListStart () {
  return {
    type: actionTypes.ROUTINE_CREATE_ADD_START
  }
}

export function addExerciseRoutineListSuccess (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_ADD_SUCCESS,
    id
  }
}

export function addExerciseRoutineListFail (error) {
  return {
    type: actionTypes.ROUTINE_CREATE_ADD_FAIL,
    error
  }
}

export function removeExerciseRoutineList (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_REMOVE_ACTION,
    id
  }
}

export function removeExerciseRoutineListStart () {
  return {
    type: actionTypes.ROUTINE_CREATE_REMOVE_START
  }
}

export function removeExerciseRoutineListSuccess (id) {
  return {
    type: actionTypes.ROUTINE_CREATE_REMOVE_SUCCESS,
    id
  }
}

export function removeExerciseRoutineListFail (error) {
  return {
    type: actionTypes.ROUTINE_CREATE_REMOVE_FAIL,
    error
  }
}

export function chooseActiveRoutine (id) {
  return {
    type: actionTypes.ROUTINE_CHOOSE_ACTIVE,
    id
  }
}
