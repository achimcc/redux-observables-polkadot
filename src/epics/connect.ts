import { ActionsObservable } from 'redux-observable';
import { Action } from '../reducers/actions';
import { map, switchMap } from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';

export const connect = (action$: ActionsObservable<Action>) =>
	action$.ofType('Instantiate').pipe(
		map(action => new ApiRx(action.payload)),
		switchMap((api: ApiRx) => api.isReady),
		map(api => ({ type: 'Connected', payload: api }))
	);
