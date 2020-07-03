import actionTypes from '@constants/actionTypes'

export function loadRecords () {
  return {
    type: actionTypes.RECORD_LOAD_ACTION
  }
}

export function loadRecordsStart () {
  return {
    type: actionTypes.RECORD_LOAD_START
  }
}

export function loadRecordsSuccess (records) {
  return {
    type: actionTypes.RECORD_LOAD_SUCCESS,
    records
  }
}

export function loadRecordsFail (error) {
  return {
    type: actionTypes.RECORD_LOAD_FAIL,
    error
  }
}

export function addRecord (record) {
  return {
    type: actionTypes.RECORD_ADD_ACTION,
    record
  }
}

export function addRecordStart () {
  return {
    type: actionTypes.RECORD_ADD_START
  }
}

export function addRecordSuccess (record) {
  return {
    type: actionTypes.RECORD_ADD_SUCCESS,
    record
  }
}

export function addRecordFail (error) {
  return {
    type: actionTypes.RECORD_ADD_FAIL,
    error
  }
}
