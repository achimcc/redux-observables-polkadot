import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './root';
import { createEpicMiddleware } from 'redux-observable';
import { State, Action } from './reducers';

const epicMiddleware = createEpicMiddleware<Action, Action>();

export interface RootState {
	task: State;
}

const store = createStore<RootState, any, any, any>(
	rootReducer,
	applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
