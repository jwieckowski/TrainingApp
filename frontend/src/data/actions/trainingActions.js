import actionTypes from '@constants/actionTypes'

export function addTrainingSeries (weight, reps, exerciseID) {
  return {
    type: actionTypes.TRAINING_ADD_SERIES_ACTION,
    weight,
    reps,
    exerciseID
  }
}

export function loadTrainings () {
  return {
    type: actionTypes.TRAINING_LOAD_ACTION
  }
}

export function loadTrainingsStart () {
  return {
    type: actionTypes.TRAINING_LOAD_START
  }
}

export function loadTrainingsSuccess (historyTraining) {
  return {
    type: actionTypes.TRAINING_LOAD_SUCCESS,
    historyTraining
  }
}

export function loadTrainingsFail (error) {
  return {
    type: actionTypes.TRAINING_LOAD_FAIL,
    error
  }
}

export function addTraining (training) {
  return {
    type: actionTypes.TRAINING_ADD_ACTION,
    training
  }
}

export function addTrainingStart () {
  return {
    type: actionTypes.TRAINING_ADD_START
  }
}

export function addTrainingSuccess (training) {
  return {
    type: actionTypes.TRAINING_ADD_SUCCESS,
    training
  }
}

export function addTrainingFail (error) {
  return {
    type: actionTypes.TRAINING_ADD_FAIL,
    error
  }
}