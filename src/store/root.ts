import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import {reducer} from './reducers';

export const rootReducer = combineReducers({
    task: reducer
  });

  export const rootEpic = combineEpics(
  );