import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import contractReducer from '../reducers/contract';
import uiReducer from '../reducers/ui';
import { instantiate } from '../epics/instantiate';
import { deploy } from '../epics/deploy';
import { uploadAbi } from '../epics/uploadAbi';
import { uploadWasm } from '../epics/uploadWasm';
import { Action } from '../reducers/actions';
import { RootState } from './store';

export const rootReducer = combineReducers({
	contract: contractReducer,
	ui: uiReducer,
});

export const rootEpic = combineEpics<Action, Action>(
	instantiate,
	deploy,
	uploadAbi,
	uploadWasm
);
