import { combineReducers, createStore } from 'redux';
import {reducer} from './reducers';



const store = createStore<RootState, any, any, any>(
    combineReducers({
        task: reducer
}));

export default store;