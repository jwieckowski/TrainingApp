import actionTypes from '@constants/actionTypes'

const initialState = {
  records: [],
  loadingRecords: false,
  loadError: undefined,
  addError: undefined
}

const loadRecordsStart = (state, action) => {
  return {
    ...state,
    loadingRecords: true,
    loadError: undefined
  }
}

const loadRecordsSuccess = (state, action) => {
  return {
    ...state,
    records: action.records,
    loadingRecords: false
  }
}

const loadRecordsFail = (state, action) => {
  return {
    ...state,
    loadError: action.error,
    loadingRecords: false
  }
}

const addRecordStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const addRecordSuccess = (state, action) => {
  return {
    ...state,
    records: state.records.filter(r => r._id === action.record._id).length !== 0
      ? [...state.records.map(r => {
        return r._id === action.record._id
          ? action.record
          : r
      })]
      : [...state.records, action.record]
  }
}

const addRecordFail = (state, action) => {
  return {
    ...state,
    addError: action.error
  }
}

export default function records (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RECORD_LOAD_ACTION:
      return loadRecordsStart(state, action)
    case actionTypes.RECORD_LOAD_SUCCESS:
      return loadRecordsSuccess(state, action)
    case actionTypes.RECORD_LOAD_FAIL:
      return loadRecordsFail(state, action)
    case actionTypes.RECORD_ADD_ACTION:
      return addRecordStart(state, action)
    case actionTypes.RECORD_ADD_SUCCESS:
      return addRecordSuccess(state, action)
    case actionTypes.RECORD_ADD_FAIL:
      return addRecordFail(state, action)
    default:
      return state
  }
}
