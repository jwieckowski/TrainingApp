import actionTypes from '@constants/actionTypes'

/*
mockInitialState = {
  trainingSeries: [[[40, 3], [40, 3], [40, 3], [40, 4]],
                   [[25, 10]],
                   [[100, 5], [100, 5]],
                   [[30, 15], [30, 15], [30, 15]]]
  activeExercises: [1, 4, 3, 5] // exercises in which user provides inputs for series
  addError: undefined
}
*/

const initialState = {
  date: new Date(),
  activeExercises: [], // store ids of exercises
  trainingSeries: [], // array of arrays for specific exercises series,
  historyTrainings: [],
  trainingActive: false,
  trainingTime: undefined,
  loadingTrainings: false,
  loadError: undefined,
  addError: undefined
}

const addTrainingSeries = (state, action) => {
  return {
    ...state,
    activeExercises: Array.from(new Set([...state.activeExercises, action.exerciseID])),
    trainingSeries: !state.activeExercises.includes(action.exerciseID)
      ? [...state.trainingSeries, [[action.weight, action.reps]]]
      : [...state.trainingSeries.map((series, index) => {
        series = index === state.activeExercises.indexOf(action.exerciseID)
          ? [...state.trainingSeries[index], [action.weight, action.reps]]
          : [...state.trainingSeries[index]]
        return series
      })]
  }
}

const loadTrainingsStart = (state, action) => {
  return {
    ...state,
    loadingTrainings: true,
    loadError: undefined
  }
}

const loadTrainingsSuccess = (state, action) => {
  return {
    ...state,
    historyTrainings: action.historyTrainings,
    loadingTrainings: false
  }
}

const loadTrainingsFail = (state, action) => {
  return {
    ...state,
    loadingTrainings: false,
    loadError: action.error
  }
}

const addTrainingStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const addTrainingSuccess = (state, action) => {
  return {
    ...state,
    historyTrainings: [action.training, ...state.historyTrainings],
    trainingSeries: [],
    activeExercises: [],
    trainingActive: false,
    trainingTime: action.trainingTime
  }
}

const addTrainingFail = (state, action) => {
  return {
    ...state,
    addError: action.error
  }
}

const startTraining = (state, action) => {
  return {
    ...state,
    trainingActive: true
  }
}

const endTraining = (state, action) => {
  return {
    ...state,
    trainingActive: false
  }
}

export default function training (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRAINING_ADD_SERIES_ACTION:
      return addTrainingSeries(state, action)
    case actionTypes.TRAINING_LOAD_START:
      return loadTrainingsStart(state, action)
    case actionTypes.TRAINING_LOAD_SUCCESS:
      return loadTrainingsSuccess(state, action)
    case actionTypes.TRAINING_LOAD_FAIL:
      return loadTrainingsFail(state, action)
    case actionTypes.TRAINING_ADD_START:
      return addTrainingStart(state, action)
    case actionTypes.TRAINING_ADD_SUCCESS:
      return addTrainingSuccess(state, action)
    case actionTypes.TRAINING_ADD_FAIL:
      return addTrainingFail(state, action)
    case actionTypes.TRAINING_START_ACTION:
      return startTraining(state, action)
    case actionTypes.TRAINING_END_ACTION:
      return endTraining(state, action)
    default:
      return state
  }
}
