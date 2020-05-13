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
