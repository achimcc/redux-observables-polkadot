import { ApiRx } from '@polkadot/api';
import { Observable } from 'rxjs';

export interface State {
	count: number;
	api: ApiRx | undefined;
	wasm: Uint8Array | undefined;
	abi: JSON | undefined;
}

export interface Action {
	type: string;
	payload: object;
}

const initialState: State = {
	count: 0,
	api: undefined,
	wasm: undefined,
	abi: undefined,
};

export const reducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case 'Subscribed': {
			console.log('Subscribed!', action.payload, state);
			return { ...state, api: action.payload as ApiRx };
		}
		case 'UploadWasmSuccess': {
			console.log('success wasm!');
			return { ...state, wasm: action.payload as Uint8Array };
		}
		case 'UploadAbiSuccess': {
			console.log('success abi!');
			return { ...state, abi: action.payload as JSON };
		}
		default:
			return state;
	}
};
