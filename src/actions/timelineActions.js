import * as types from './actionTypes';
import timelineApi from '../api/mockTimelineApi';

export function loadTimelineSuccess(tlRows){
  return{ type: types.LOAD_TIMELINE_SUCCESS , tlRows};
}

export function createTimeLineRowSuccess(tlRow){
  return{ type: types.CREATE_TIMELINE_ROW_SUCCESS , tlRow};
}

export function updateTimelineRowSuccess(tlRow){
  return{ type: types.UPDATE_TIMELINE_ROW_SUCCESS , tlRow};
}

export function loadTimeline(){
  return function(dispatch){
    return timelineApi.getAllTimeline().then(tlRows => {
      dispatch(loadTimelineSuccess(tlRows));
    }).catch(error =>{
      throw(error);
    });
  };
}

export function saveTimelineRow(tlRow){
  return function (dispatch, getState){
    return timelineApi.saveTimelineRow(tlRow).then(savedTimelineRow => {
      tlRow.id ? dispatch(updateTimelineRowSuccess(savedTimelineRow)) :
        dispatch(createTimeLineRowSuccess(savedTimelineRow));
    }).catch(error => {
      throw(error);
    })
  }
}
