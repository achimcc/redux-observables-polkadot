import { ActionsObservable } from 'redux-observable';
import { Action } from '../store/reducers';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';

export const instantiate = (action$: ActionsObservable<Action>) =>
	action$.pipe(
		filter(action => action.type === 'Instantiate'),
		map(action => new ApiRx(action.payload)),
		switchMap((api: ApiRx) => api.isReady),
		map(api => ({ type: 'Subscribed', payload: api }))
	);
