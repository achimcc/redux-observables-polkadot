import { ApiRx } from '@polkadot/api';
import { Action } from './actions';

export interface ContractState {
	count: number;
	api: ApiRx | undefined;
	wasm: Uint8Array | undefined;
	abi: JSON | undefined;
}

const initialState: ContractState = {
	count: 0,
	api: undefined,
	wasm: undefined,
	abi: undefined,
};

const contractReducer = (
	state: ContractState = initialState,
	action: Action
): ContractState => {
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

export default contractReducer;
