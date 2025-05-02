import './App.css';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
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
				<p>See console.</p>
				<p>count: {this.state.count}</p>
				<button
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}
				>
					Increment
				</button>
			</div>
		);
	}
}

export default App;
