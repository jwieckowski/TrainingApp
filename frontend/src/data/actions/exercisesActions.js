import actionTypes from '@constants/actionTypes'

export function loadExercises () {
  return {
    type: actionTypes.EXERCISES_LOAD_ACTION
  }
}

export function loadExercisesStart () {
  return {
    type: actionTypes.EXERCISES_LOAD_START
  }
}

export function loadExercisesSuccess (exercises) {
  return {
    type: actionTypes.EXERCISES_LOAD_SUCCESS,
    exercises
  }
}

export function loadExercisesFail (error) {
  return {
    type: actionTypes.EXERCISES_LOAD_FAIL,
    error
  }
}

export function refreshExercises () {
  return {
    type: actionTypes.EXERCISES_REFRESH_ACTION
  }
}

export function refreshExercisesStart () {
  return {
    type: actionTypes.EXERCISES_REFRESH_START
  }
}

export function refreshExercisesSuccess (exercises) {
  return {
    type: actionTypes.EXERCISES_REFRESH_SUCCESS,
    exercises
  }
}

export function refreshExercisesFail (error) {
  return {
    type: actionTypes.EXERCISES_REFRESH_FAIL,
    error
  }
}

