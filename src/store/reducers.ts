import { ApiRx } from '@polkadot/api';
import { Observable } from 'rxjs';

export interface State {
	count: number;
	api: ApiRx;
}

export interface Action {
	type: string;
	payload: object;
}

const initialState: State = {
	count: 0,
	api: new ApiRx(),
};

export const reducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
		case 'Inc':
			return { count: state.count + 1, api: state.api };
		case 'Dec':
			return { count: state.count - 1, api: state.api };
		case 'Subscribed': {
			console.log('Subscribed!', action.payload, state);
			return { count: state.count, api: action.payload as ApiRx };
		}

		default:
			return state;
	}
};
