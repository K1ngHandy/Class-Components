import './App.css';
import React from 'react';
import { people } from './People';

class App extends React.Component {
	constructor(props) {
		console.log('Constructor called');
		// Initialize state
		super(props);
		this.state = {
			friends: people,
		};
	}
	render() {
		console.log('Render invoked');
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
				<h1>Welcome Friends!</h1>
				<p>
					This example explores ReactJS and React Components
					lifecycle.
				</p>
				{this.state.friends.map((person) => (
					<div key={person.id}>{person.first_name}</div>
				))}
			</div>
		);
	}
}

export default App;
