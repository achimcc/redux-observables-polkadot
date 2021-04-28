import { ActionsObservable } from 'redux-observable';
import { Action } from '../reducers/actions';
import { filter, map, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ApiRx, Keyring, ApiPromise } from '@polkadot/api';
import { CodeRx, CodePromise } from '@polkadot/api-contract';
import type { AnyJson, ISubmittableResult } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '@polkadot/api/types';
import { promises } from 'node:dns';

export const deploy = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Deploy').pipe(
		mergeMap((action: Action) => {
			const api = (state$ as any).contract.api as ApiRx;
			const apiPromise = new ApiPromise();
			const abi = (state$ as any).contract.abi as AnyJson;
			const wasm = (state$ as any).contract.wasm as Uint8Array;
			const code = new CodeRx(api, abi, wasm);
			const blueprint = code.tx.createBlueprint({});
			return blueprint;
		}),
		map(blueprint => {
			console.log('code: ', blueprint);
			const keyring = new Keyring({ type: 'sr25519' });
			const alice = keyring.addFromUri('//Alice');
			console.log('blue', blueprint);
			return { type: 'Any', payload: {} };
		})
	);

/*
const result = blueprint.signAndSend();
mergeMap(submittable => {
			const keyring = new Keyring({ type: 'sr25519' });
			const alice = keyring.addFromUri('//Alice');
			return submittable;
		}),
		filter(res => res.isCompleted),
		*/
