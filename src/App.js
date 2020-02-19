import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/searchBar"

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			filterText: '',
		}
		this.handleUserInput = this.handleUserInput.bind(this);
	}
	handleUserInput(filter) {
		console.log('handleUserInput ' + filter)
		this.setState({
			filterText: filter
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<Search
						searchTerm={this.state.filterText}
						userInput={this.handleUserInput}
					/>
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
}
