import { ApiRx } from '@polkadot/api';
import { Observable } from 'rxjs';

export interface State {
	count: number;
	api: ApiRx | undefined;
	wasm: Uint8Array | undefined;
}

export interface Action {
	type: string;
	payload: object;
}

const initialState: State = {
	count: 0,
	api: undefined,
	wasm: undefined,
};

export const reducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case 'Subscribed': {
			console.log('Subscribed!', action.payload, state);
			return { api: action.payload as ApiRx, ...state };
		}
		case 'Upload': {
			console.log('Subscribed!', action.payload, state);
			return { wasm: action.payload as Uint8Array, ...state };
		}
		default:
			return state;
	}
};
