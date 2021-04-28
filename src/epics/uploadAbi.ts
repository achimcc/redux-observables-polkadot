import { ActionsObservable } from 'redux-observable';
import { Action } from '../store/reducers';
import { filter, map, mergeMap } from 'rxjs/operators';
import { compactAddLength, isWasm } from '@polkadot/util';
import { RcFile, UploadChangeParam } from 'antd/lib/upload';
import { Observable } from '@polkadot/types/types';
import { formatNumber, hexToU8a, isHex, u8aToString } from '@polkadot/util';
import { from } from 'rxjs';
import { Abi } from '@polkadot/api-contract';

const BYTE_STR_0 = '0'.charCodeAt(0);
const BYTE_STR_X = 'x'.charCodeAt(0);
const STR_NL = '\n';
const NOOP = (): void => undefined;

function convertResult(result: ArrayBuffer): Uint8Array {
	const data = new Uint8Array(result);

	// this converts the input (if detected as hex), via the hex conversion route
	if (data[0] === BYTE_STR_0 && data[1] === BYTE_STR_X) {
		let hex = u8aToString(data);
		while (hex[hex.length - 1] === STR_NL) {
			hex = hex.substr(0, hex.length - 1);
		}
		if (isHex(hex)) {
			return hexToU8a(hex);
		}
	}

	return data;
}

export const uploadAbi = (action$: ActionsObservable<Action>, state$: any) =>
	action$.ofType('UploadAbi').pipe(
		mergeMap(action => {
			const promise = (action.payload as UploadChangeParam).file.originFileObj.text();
			return from(promise);
		}),
		map(arrayBuffer => JSON.parse(JSON.stringify(arrayBuffer))),
		map(abi => ({ type: 'UploadAbiSuccess', payload: abi }))
	);
