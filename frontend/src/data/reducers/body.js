import actionTypes from '@constants/actionTypes'

const initialState = {
  bodyData: [],
  loadingBodyData: false,
  loadError: undefined,
  addError: undefined,
  removeError: undefined,
  clickedItem: undefined
}

const loadBodyDataStart = (state, action) => {
  return {
    ...state,
    loadingBodyData: true,
    loadError: undefined
  }
}

const loadBodyDataSuccess = (state, action) => {
  return {
    ...state,
    bodyData: action.bodyData,
    loadingBodyData: false
  }
}

const loadBodyDataFail = (state, action) => {
  return {
    ...state,
    loadingBodyData: false,
    loadError: action.error
  }
}

const addBodyDataStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const addBodyDataSuccess = (state, action) => {
  return {
    ...state,
    bodyData: [action.body, ...state.bodyData]
  }
}

const addBodyDataFail = (state, action) => {
  return {
    ...state,
    addError: action.error
  }
}

const updateBodyDataStart = (state, action) => {
  return {
    ...state,
    addError: undefined
  }
}

const updateBodyDataSuccess = (state, action) => {
  return {
    ...state,
    bodyData: [...state.bodyData.map(b => {
      b = action.updateBody._id === b._id ? action.updateBody : b
      return b
    })],
    clickedItem: undefined
  }
}

const updateBodyDataFail = (state, action) => {
  return {
    ...state,
    addError: action.error,
    clickedItem: undefined
  }
}

const clickedItemBodyData = (state, action) => {
  return {
    ...state,
    clickedItem: action.clickedItem
  }
}

export default function body (state = initialState, action) {
  switch (action.type) {
    case actionTypes.BODY_DATA_LOAD_START:
      return loadBodyDataStart(state, action)
    case actionTypes.BODY_DATA_LOAD_SUCCESS:
      return loadBodyDataSuccess(state, action)
    case actionTypes.BODY_DATA_LOAD_FAIL:
      return loadBodyDataFail(state, action)
    case actionTypes.BODY_DATA_ADD_START:
      return addBodyDataStart(state, action)
    case actionTypes.BODY_DATA_ADD_SUCCESS:
      return addBodyDataSuccess(state, action)
    case actionTypes.BODY_DATA_ADD_FAIL:
      return addBodyDataFail(state, action)
    case actionTypes.BODY_DATA_UPDATE_START:
      return updateBodyDataStart(state, action)
    case actionTypes.BODY_DATA_UPDATE_SUCCESS:
      return updateBodyDataSuccess(state, action)
    case actionTypes.BODY_DATA_UPDATE_FAIL:
      return updateBodyDataFail(state, action)
    case actionTypes.BODY_DATA_CLICKED_ITEM:
      return clickedItemBodyData(state, action)
    default:
      return state
  }
}
