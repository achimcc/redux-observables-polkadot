import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { reducer } from './reducers';
import { instantiate } from '../epics/instantiate';
import { deploy } from '../epics/deploy';
import { uploadAbi } from '../epics/uploadAbi';
import { uploadWasm } from '../epics/uploadWasm';
import { Action } from './reducers';
import { RootState } from './store';

export const rootReducer = combineReducers({
	task: reducer,
});

export const rootEpic = combineEpics(
	instantiate,
	deploy,
	uploadAbi,
	uploadWasm
);
