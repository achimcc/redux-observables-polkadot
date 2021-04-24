import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './root';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();


const store = createStore<RootState, any, any, any>(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;