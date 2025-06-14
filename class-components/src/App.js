import './App.css';
import React from 'react';
import { People } from './People';

class App extends React.Component {
	constructor(props) {
		console.log('Constructor called');
		// Initialize state
		super(props);
		this.state = {
			people: People,
		};
	}
	render() {
		return (
			<div
				className="App"
				style={{
					color: 'steelblue',
					backgroundColor: 'lightsteelblue',
					fontWeight: 'bold',
					padding: '20px',
				}}
			>
				<h1>Class Components</h1>
				<p>
					This example explores ReactJS and React Components
					lifecycle.
				</p>
			</div>
		);
	}
}

export default App;
