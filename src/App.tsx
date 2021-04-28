import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Instantiate from './components/Instantiate';
import Deploy from './components/Deploy';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<Instantiate />
					<Deploy />
				</header>
			</div>
		</Provider>
	);
}

export default App;
