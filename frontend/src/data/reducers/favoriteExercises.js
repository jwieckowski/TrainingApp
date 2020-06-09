import actionTypes from '@constants/actionTypes'

const initialState = {
  favoriteExercises: [],
  loadingFavoriteExercises: false,
  loadError: undefined,
  addError: undefined,
  removeError: undefined
}

const loadFavoriteExercisesStart = (state, action) => {
  return {
    ...state,
    loadingFavoriteExercises: true,
    loadError: undefined
  }
}

const loadFavoriteExercisesSuccess = (state, action) => {
  return {
    ...state,
    favoriteExercises: action.favoriteExercises,
    loadingFavoriteExercises: false
  }
}

const loadFavoriteExercisesFail = (state, action) => {
  return {
    ...state,
    loadingFavoriteExercises: false,
    loadError: action.error
  }
}

const addFavoriteExercisesStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const addFavoriteExercisesSuccess = (state, action) => {
  return {
    ...state,
    favoriteExercises: [...state.favoriteExercises, action.id]
  }
}

const addFavoriteExercisesFail = (state, action) => {
  return {
    ...state,
    addError: action.error
  }
}

const removeFavoriteExercisesStart = (state, action) => {
  return {
    ...state,
    removeError: undefined
  }
}

const removeFavoriteExercisesSuccess = (state, action) => {
  return {
    ...state,
    favoriteExercises: [...state.favoriteExercises.filter(f => f.id !== action.id)]
  }
}

const removeFavoriteExercisesFail = (state, action) => {
  return {
    ...state,
    removeError: action.error
  }
}

export default function favoriteExercises (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAVORITE_EXERCISES_LOAD_START:
      return loadFavoriteExercisesStart(state, action)
    case actionTypes.FAVORITE_EXERCISES_LOAD_SUCCESS:
      return loadFavoriteExercisesSuccess(state, action)
    case actionTypes.FAVORITE_EXERCISES_LOAD_FAIL:
      return loadFavoriteExercisesFail(state, action)
    case actionTypes.FAVORITE_EXERCISES_ADD_START:
      return addFavoriteExercisesStart(state, action)
    case actionTypes.FAVORITE_EXERCISES_ADD_SUCCESS:
      return addFavoriteExercisesSuccess(state, action)
    case actionTypes.FAVORITE_EXERCISES_ADD_FAIL:
      return addFavoriteExercisesFail(state, action)
    case actionTypes.FAVORITE_EXERCISES_REMOVE_START:
      return removeFavoriteExercisesStart(state, action)
    case actionTypes.FAVORITE_EXERCISES_REMOVE_SUCCESS:
      return removeFavoriteExercisesSuccess(state, action)
    case actionTypes.FAVORITE_EXERCISES_REMOVE_FAIL:
      return removeFavoriteExercisesFail(state, action)
    default:
      return state
  }
}
