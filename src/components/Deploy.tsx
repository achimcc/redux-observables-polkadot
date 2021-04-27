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
	return (
		<>
			<InputFile />
			<input onChange={onChangeGas} value={gas} />
			<input onChange={onChangeEndowment} value={endowment} />
			<button onClick={onDeploy}>Deploy</button>
		</>
	);
};

export default Deploy;
