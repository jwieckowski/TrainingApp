import actionTypes from '@constants/actionTypes'

const initialState = {
  exercises: [],
  loadingExercises: false,
  loadError: undefined,
  refreshError: undefined
}

const loadExercisesStart = (state, action) => {
  return {
    ...state,
    loadingExercises: true,
    loadError: undefined
  }
}

const loadExercisesSuccess = (state, action) => {
  return {
    ...state,
    exercises: action.exercises,
    loadingExercises: false
  }
}

const loadExercisesFail = (state, action) => {
  return {
    ...state,
    loadingExercises: false,
    loadError: action.error
  }
}

const refreshExercisesStart = (state, action) => {
  return {
    ...state,
    refreshError: undefined
  }
}

const refreshExercisesSuccess = (state, action) => {
  return {
    ...state,
    exercises: action.exercises
  }
}

const refreshExercisesFail = (state, action) => {
  return {
    ...state,
    refreshError: action.error
  }
}

export default function exercises (state = initialState, action) {
  switch (action.type) {
    case actionTypes.EXERCISES_LOAD_START:
      return loadExercisesStart(state, action)
    case actionTypes.EXERCISES_LOAD_SUCCESS:
      return loadExercisesSuccess(state, action)
    case actionTypes.EXERCISES_LOAD_FAIL:
      return loadExercisesFail(state, action)
    case actionTypes.EXERCISES_REFRESH_START:
      return refreshExercisesStart(state, action)
    case actionTypes.EXERCISES_REFRESH_SUCCESS:
      return refreshExercisesSuccess(state, action)
    case actionTypes.EXERCISES_REFRESH_FAIL:
      return refreshExercisesFail(state, action)
    default:
      return state
  }
}
