import actionTypes from '@constants/actionTypes'

export function loadFavoriteExercises () {
  return {
    type: actionTypes.FAVORITE_EXERCISES_LOAD_ACTION
  }
}

export function loadFavoriteExercisesStart () {
  return {
    type: actionTypes.FAVORITE_EXERCISES_LOAD_START
  }
}

export function loadFavoriteExercisesSuccess (favorite) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_LOAD_SUCCESS,
    favorite
  }
}

export function loadFavoriteExercisesFail (error) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_LOAD_FAIL,
    error
  }
}

export function addFavoriteExercises (id) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_ADD_ACTION,
    id
  }
}

export function addFavoriteExercisesStart () {
  return {
    type: actionTypes.FAVORITE_EXERCISES_ADD_START
  }
}

export function addFavoriteExercisesSuccess (id) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_ADD_SUCCESS,
    id
  }
}

export function addFavoriteExercisesFail (error) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_ADD_FAIL,
    error
  }
}

export function removeFavoriteExercises (id) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_REMOVE_ACTION,
    id
  }
}

export function removeFavoriteExercisesStart () {
  return {
    type: actionTypes.FAVORITE_EXERCISES_REMOVE_START
  }
}

export function removeFavoriteExercisesSuccess (id) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_REMOVE_SUCCESS,
    id
  }
}

export function removeFavoriteExercisesFail (error) {
  return {
    type: actionTypes.FAVORITE_EXERCISES_REMOVE_FAIL,
    error
  }
}
