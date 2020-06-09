import actionTypes from '@constants/actionTypes'

const initialState = {
  routines: [],
  loadingRoutines: false,
  loadError: undefined,
  addError: undefined,
  removeError: undefined,
  routineID: undefined,
  creatingRoutine: undefined,
  createError: undefined,
  addExerciseError: undefined,
  removeExerciseError: undefined,
  saveError: undefined
}

const loadRoutinesStart = (state, action) => {
  return {
    ...state,
    loadingRoutines: true,
    loadError: undefined,
    routineID: undefined,
    creatingRoutine: false
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

const createRoutineListStart = (state, action) => {
  return {
    ...state,
    routineID: action.id,
    creatingRoutine: true
  }
}

const createRoutineListSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines.map(routine => {
      routine = routine._id === action.routine.id ? action.routine : routine
      return routine
    })],
    creatingRoutine: false
  }
}

const createRoutineListFail = (state, action) => {
  return {
    ...state,
    creatingRoutine: false,
    createError: action.error
  }
}

const saveExerciseRoutineListStart = (state, action) => {
  return {
    ...state,
    saveError: undefined
  }
}

const saveExerciseRoutineListSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines.map(routine => {
      routine = routine._id === action.routine.id ? action.routine : routine
      return routine
    })],
    creatingRoutine: false,
    saveError: undefined
  }
}

const saveExerciseRoutineListFail = (state, action) => {
  return {
    ...state,
    creatingRoutine: false,
    saveError: action.error
  }
}

const addExerciseRoutineListStart = (state, action) => {
  return {
    ...state,
    addExerciseError: undefined
  }
}

const addExerciseRoutineListSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines.map(routine => {
      routine._id === state.routineID && routine.exercises.push(action.id)
      return routine
    })],
    addExerciseError: undefined
  }
}

const addExerciseRoutineListFail = (state, action) => {
  return {
    ...state,
    addExerciseError: action.error
  }
}

const removeExerciseRoutineListStart = (state, action) => {
  return {
    ...state,
    removeExerciseError: undefined
  }
}

const removeExerciseRoutineListSuccess = (state, action) => {
  return {
    ...state,
    routines: [...state.routines.map(routine => {
      routine.exercises = routine._id === state.routineID ? routine.exercises.filter(e => e !== action.id) : routine.exercises
      return routine
    })],
    removeExerciseError: undefined
  }
}

const removeExerciseRoutineListFail = (state, action) => {
  return {
    ...state,
    removeExerciseError: action.error
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
    case actionTypes.ROUTINE_CREATE_LIST_START:
      return createRoutineListStart(state, action)
    case actionTypes.ROUTINE_CREATE_LIST_SUCCESS:
      return createRoutineListSuccess(state, action)
    case actionTypes.ROUTINE_CREATE_LIST_FAIL:
      return createRoutineListFail(state, action)
    case actionTypes.ROUTINE_CREATE_ADD_START:
      return addExerciseRoutineListStart(state, action)
    case actionTypes.ROUTINE_CREATE_ADD_SUCCESS:
      return addExerciseRoutineListSuccess(state, action)
    case actionTypes.ROUTINE_CREATE_ADD_FAIL:
      return addExerciseRoutineListFail(state, action)
    case actionTypes.ROUTINE_CREATE_REMOVE_START:
      return removeExerciseRoutineListStart(state, action)
    case actionTypes.ROUTINE_CREATE_REMOVE_SUCCESS:
      return removeExerciseRoutineListSuccess(state, action)
    case actionTypes.ROUTINE_CREATE_REMOVE_FAIL:
      return removeExerciseRoutineListFail(state, action)
    case actionTypes.ROUTINE_CREATE_SAVE_START:
      return saveExerciseRoutineListStart(state, action)
    case actionTypes.ROUTINE_CREATE_SAVE_SUCCESS:
      return saveExerciseRoutineListSuccess(state, action)
    case actionTypes.ROUTINE_CREATE_SAVE_FAIL:
      return saveExerciseRoutineListFail(state, action)
    default:
      return state
  }
}
