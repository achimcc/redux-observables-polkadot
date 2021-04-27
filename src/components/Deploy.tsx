import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Deploy = () => {
	const dispatch = useDispatch();
	const [gas, setGas] = useState<number>(0);
	const [endowment, setEndowment] = useState<number>(0);
	const onChangeGas = (e: any) => setGas(e.target.value);
	const onChangeEndowment = (e: any) => setEndowment(e.target.value);
	const onUpload = (wasm: Uint8Array, name: string) =>
		dispatch({ type: 'Upload', payload: { wasm, name } });
	const onDeploy = () =>
		dispatch({ type: 'Deploy', payload: { gas: gas, endowment: endowment } });
	return (
		<>
			<input onChange={onChangeGas} value={gas} />
			<input onChange={onChangeEndowment} value={endowment} />
			<button onClick={onDeploy}>Deploy</button>
		</>
	);
};

export default Deploy;
