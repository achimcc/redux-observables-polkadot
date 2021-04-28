import { ActionsObservable } from 'redux-observable';
import { Action } from '../store/reducers';
import { filter, map } from 'rxjs/operators';
import { compactAddLength, isWasm } from '@polkadot/util';
import { UploadChangeParam } from 'antd/lib/upload';
import { Observable } from '@polkadot/types/types';
import { from } from 'rxjs';

export const upload = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Upload').pipe(
		map(action => {
			console.log('Upload, state:', (state$ as any).value);
			console.log('Upload, payload:', (action as any).payload);
			return compactAddLength(
				(action.payload as UploadChangeParam<Uint8Array>).file
			);
		}),
		filter(wasm => isWasm(wasm)),
		map(wasm => ({ type: 'UploadSuccess', payload: wasm }))
	);
