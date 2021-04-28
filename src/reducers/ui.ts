import { Action } from './actions';

export interface UiState {
	isApiConneected: boolean;
	isWasmUploaded: boolean;
	isAbiUploaded: boolean;
}

const initialState: UiState = {
	isApiConneected: false,
	isWasmUploaded: false,
	isAbiUploaded: false,
};

const contractReducer = (
	state: UiState = initialState,
	action: Action
): UiState => {
	switch (action.type) {
		case 'Subscribed': {
			console.log('Subscribed!', action.payload, state);
			return { ...state, isApiConneected: true };
		}
		case 'UploadWasmSuccess': {
			return { ...state, isWasmUploaded: true };
		}
		case 'UploadAbiSuccess': {
			console.log('success abi!');
			return { ...state, isAbiUploaded: true };
		}
		default:
			return state;
	}
};

export default contractReducer;
