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
	merge,
} from 'rxjs/operators';
import { ApiRx, Keyring } from '@polkadot/api';
import { CodeRx, Abi, BlueprintRx } from '@polkadot/api-contract';
import {
	textSpanContainsTextSpan,
	validateLocaleAndSetLanguage,
} from 'typescript';
import { Observable } from '@polkadot/x-rxjs';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { compactAddLength, isWasm } from '@polkadot/util';
import { WSAEMFILE } from 'node:constants';

export const upload = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Upload').pipe(
		map(action => {
			console.log('Upload', (state$ as any).value);
			return compactAddLength((action.payload as any).wasm);
		}),
		filter(wasm => isWasm(wasm)),
		map(wasm => ({ type: 'UploadSuccess', payload: wasm }))
	);
