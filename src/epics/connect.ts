import { ActionsObservable } from 'redux-observable';
import { Action } from '../reducers/actions';
import { map, switchMap, mapTo, filter } from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';

export const connect = (action$: ActionsObservable<Action>) =>
	action$.ofType('Connect').pipe(
		mapTo(new ApiRx()),
		filter(api => api.isConnected),
		map(api => {
			console.log('here is the api: ', api);
			return { type: 'Connected', payload: api };
		})
	);
