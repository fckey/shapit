import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function timelineReducer(state=initialState.tlRows, action){
  switch (action.type){
    case types.LOAD_TIMELINE_SUCCESS:
      return action.tlRows;
    case types.CREATE_TIMELINE_ROW_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.tlRow)
      ];
    case types.UPDATE_TIMELINE_ROW_SUCCESS:
      return [
        ...state.filter(tlRow => tlRow.id !== action.tlRow.id),
        Object.assign({}, action.tlRow)
      ];
    default:
      return state;
  }
}

