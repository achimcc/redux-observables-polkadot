import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Display from './components/Display';
import Instantiate from './components/Instantiate';
import Deploy from './components/Deploy';
import IncDec from './components/IncDec';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<Display />
					<IncDec />
					<Instantiate />
					<Deploy />
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</Provider>
	);
}

export default App;
