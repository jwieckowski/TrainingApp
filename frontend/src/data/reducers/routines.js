import actionTypes from '@constants/actionTypes'

const initialState = {
  routines: [],
  loadingRoutines: false,
  loadError: undefined,
  addError: undefined,
  removeError: undefined
}

const loadRoutinesStart = (state, action) => {
  return {
    ...state,
    loadingRoutines: true,
    loadError: undefined
  }
}

const loadRoutinesSuccess = (state, action) => {
  return {
    ...state,
    routines: action.routines,
    loadingRoutines: false
  }
}

const loadRoutinesFail = (state, action) => {
  return {
    ...state,
    loadingRoutines: false,
    loadError: action.error
  }
}

const addRoutineStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const addRoutineSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines, action.routine]
  }
}

const addRoutineFail = (state, action) => {
  return {
    ...state,
    addError: action.error
  }
}

const removeRoutineStart = (state, action) => {
  return {
    ...state,
    removeError: undefined
  }
}

const removeRoutineSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines.filter(r => r._id !== action.routine.id)]
  }
}

const removeRoutineFail = (state, action) => {
  return {
    ...state,
    removeError: action.error
  }
}

export default function routines (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ROUTINES_LOAD_START:
      return loadRoutinesStart(state, action)
    case actionTypes.ROUTINES_LOAD_SUCCESS:
      return loadRoutinesSuccess(state, action)
    case actionTypes.ROUTINES_LOAD_FAIL:
      return loadRoutinesFail(state, action)
    case actionTypes.ROUTINE_ADD_START:
      return addRoutineStart(state, action)
    case actionTypes.ROUTINE_ADD_SUCCESS:
      return addRoutineSuccess(state, action)
    case actionTypes.ROUTINE_ADD_FAIL:
      return addRoutineFail(state, action)
    case actionTypes.ROUTINE_REMOVE_START:
      return removeRoutineStart(state, action)
    case actionTypes.ROUTINE_REMOVE_SUCCESS:
      return removeRoutineSuccess(state, action)
    case actionTypes.ROUTINE_REMOVE_FAIL:
      return removeRoutineFail(state, action)
    default:
      return state
  }
}
