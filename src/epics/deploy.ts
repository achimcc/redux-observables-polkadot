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

export const deploy = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Deploy').pipe(
		map(action => {
			console.log('Deploy', (state$ as any).value.task.api);
			return ((state$ as any).value.task
				.api as ApiRx).tx.contracts.instantiateWithCode(
				(action.payload as any).endowment,
				(action.payload as any).gas,
				(action.payload as any).code,
				(action.payload as any).abi,
				''
			);
		}),
		mergeMap(submittable => {
			const keyring = new Keyring({ type: 'sr25519' });
			const alice = keyring.addFromUri('//Alice');
			return submittable.signAndSend(alice);
		}),
		filter(res => res.isCompleted),
		map(res => {
			console.log('res: ', res);
			return { type: 'Deployed', payload: res.status };
		})
	);
