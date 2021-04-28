import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Display = () => {
	const store = useSelector((store: RootState) => store);
	console.log('store: ', store);
	return <>{store.contract.count}</>;
};

export default Display;
