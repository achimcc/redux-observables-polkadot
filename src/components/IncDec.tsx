import React from 'react';
import { useDispatch } from 'react-redux';

const Instantiate = () => {
	const dispatch = useDispatch();
	const onAdd = () => dispatch({ type: 'Inc' });
	const onDec = () => dispatch({ type: 'Dec' });
	return (
		<>
			<button onClick={onDec}>-</button>
			<button onClick={onAdd}>+</button>
		</>
	);
};

export default Instantiate;
