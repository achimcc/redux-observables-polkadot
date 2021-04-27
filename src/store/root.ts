import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { reducer } from './reducers';
import { instantiate } from '../epics/instantiate';
import { upload } from '../epics/upload';
import { deploy } from '../epics/deploy';
import { Action } from './reducers';
import { RootState } from './store';

export const rootReducer = combineReducers({
	task: reducer,
});

export const rootEpic = combineEpics(instantiate, upload, deploy);
