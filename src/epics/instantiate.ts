import { ActionsObservable } from 'redux-observable';
import { RootState } from '../store/store';
import { Action } from '../store/reducers';
import {
	mapTo,
	delay,
	filter,
	takeUntil,
	map,
	subscribeOn,
	mergeMap,
	take,
	switchMap,
} from 'rxjs/operators';
import { ApiRx } from '@polkadot/api';
import {
	textSpanContainsTextSpan,
	validateLocaleAndSetLanguage,
} from 'typescript';
import { Observable } from '@polkadot/x-rxjs';
import { from } from 'rxjs';

const test = from(new ApiRx().connect());
export const instantiate = (
	action$: ActionsObservable<Action>,
	store$: RootState
) =>
	action$.pipe(
		filter(action => action.type === 'Instantiate'),
		map(action => new ApiRx(action.payload)),
		switchMap((api: ApiRx) => api.isReady),
		map(api => ({ type: 'Subscribed', payload: api }))
	);
