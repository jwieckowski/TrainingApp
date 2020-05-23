import actionTypes from '@constants/actionTypes'

export function loadBodyData () {
  return {
    type: actionTypes.BODY_DATA_LOAD_ACTION
  }
}

export function loadBodyDataStart () {
  return {
    type: actionTypes.BODY_DATA_LOAD_START
  }
}

export function loadBodyDataSuccess (bodyData) {
  return {
    type: actionTypes.BODY_DATA_LOAD_SUCCESS,
    bodyData
  }
}

export function loadBodyDataFail (error) {
  return {
    type: actionTypes.BODY_DATA_LOAD_FAIL,
    error
  }
}

export function addBodyData (body) {
  return {
    type: actionTypes.BODY_DATA_ADD_ACTION,
    body
  }
}

export function addBodyDataStart () {
  return {
    type: actionTypes.BODY_DATA_ADD_START
  }
}

export function addBodyDataSuccess (body) {
  return {
    type: actionTypes.BODY_DATA_ADD_SUCCESS,
    body
  }
}

export function addBodyDataFail (error) {
  return {
    type: actionTypes.BODY_DATA_ADD_FAIL,
    error
  }
}

export function updateBodyData (updateBody) {
  return {
    type: actionTypes.BODY_DATA_UPDATE_ACTION,
    updateBody
  }
}

export function updateBodyDataStart () {
  return {
    type: actionTypes.BODY_DATA_UPDATE_START
  }
}

export function updateBodyDataSuccess (updateBody) {
  return {
    type: actionTypes.BODY_DATA_UPDATE_SUCCESS,
    updateBody
  }
}

export function updateBodyDataFail (error) {
  return {
    type: actionTypes.BODY_DATA_UPDATE_FAIL,
    error
  }
}

export function clickedItemBodyData (clickedItem) {
  return {
    type: actionTypes.BODY_DATA_CLICKED_ITEM,
    clickedItem
  }
}
