import { ActionsObservable } from 'redux-observable';
import { Action } from '../reducers/actions';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ApiRx, Keyring } from '@polkadot/api';
import { CodeRx } from '@polkadot/api-contract';
import type { AnyJson } from '@polkadot/types/types';

export const deploy = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Deploy').pipe(
		map((action: Action) => {
			const api = (state$ as any).contract.api as ApiRx;
			const abi = (state$ as any).contract.abi as AnyJson;
			const wasm = (state$ as any).contract.wasm as Uint8Array;
			return new CodeRx(api, abi, wasm);
		}),
		map((codeRx: CodeRx) => {
			console.log('code: ', codeRx);
			const bluePrint = codeRx.tx.createBlueprint;
			console.log('blue', bluePrint);
			return { type: 'Any', payload: {} };
		})
	);

/*mergeMap(submittable => {
			const keyring = new Keyring({ type: 'sr25519' });
			const alice = keyring.addFromUri('//Alice');
			return submittable;
		}),
		filter(res => res.isCompleted),
		*/
