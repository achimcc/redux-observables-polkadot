import { combineReducers, createStore } from 'redux';
import {reducer, State} from './reducers';

interface RootState {
    task: State;
  }

const store = createStore<RootState, any, any, any>(
    combineReducers({
        task: reducer
}));

export default store;