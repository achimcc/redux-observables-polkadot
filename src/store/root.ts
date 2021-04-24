import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { reducer } from './reducers';
import { epic } from './epics'

export const rootReducer = combineReducers({
    task: reducer
  });

  export const rootEpic = combineEpics(
    epic
  );