import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Display = () => {
	const count = useSelector((store: RootState) => store.task.count);
	return <>{count}</>;
};

export default Display;
