import { RcFile, UploadChangeParam } from 'antd/lib/upload';
import React, { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputFile from './InputFile/InputFile';

const Deploy = () => {
	const dispatch = useDispatch();
	const [gas, setGas] = useState<number>(0);
	const [endowment, setEndowment] = useState<number>(0);
	const onChangeGas = (e: any) => setGas(e.target.value);
	const onChangeEndowment = (e: any) => setEndowment(e.target.value);
	const onDeploy = () =>
		dispatch({ type: 'Deploy', payload: { gas: gas, endowment: endowment } });
	const onUploadWasm = (file: UploadChangeParam): void => {
		dispatch({ type: 'UploadWasm', payload: file });
	};
	const onUploadAbi = (file: UploadChangeParam): void => {
		dispatch({ type: 'UploadAbi', payload: file });
	};
	return (
		<>
			<InputFile action={onUploadWasm} label={'Upload Wasm'} />
			<InputFile action={onUploadAbi} label={'Upload Abi'} />
			<input onChange={onChangeGas} value={gas} />
			<input onChange={onChangeEndowment} value={endowment} />
			<button onClick={onDeploy}>Deploy</button>
		</>
	);
};

export default Deploy;
