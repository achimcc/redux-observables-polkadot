import { ActionsObservable } from 'redux-observable';
import { RootState } from '../store/store';
import { Action } from '../store/reducers';
import { filter, map } from 'rxjs/operators';
import { compactAddLength, isWasm } from '@polkadot/util';

export const upload = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('Upload').pipe(
		map(action => {
			console.log('Upload', (state$ as any).value);
			return compactAddLength((action.payload as any).wasm);
		}),
		filter(wasm => isWasm(wasm)),
		map(wasm => ({ type: 'UploadSuccess', payload: wasm }))
	);
