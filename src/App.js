import React from 'react';
import { Online, Offline } from 'react-detect-offline';
import rainbow from './img/rainbow.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={rainbow} className="rainbow-icon" alt="rainbow" />
				<Online>有網路時會顯示的內容</Online>
				<Offline>離線時會顯示的內容</Offline>
				<p>
					Edit <code>src/App.js</code> and save to reload.
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
	);
}

export default App;
