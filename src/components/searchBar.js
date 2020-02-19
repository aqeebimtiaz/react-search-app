import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: ''
		}
		this.filterList = this.filterList.bind(this);
	}
	filterList(event) {
		this.props.userInput(event.target.value);
		console.log('event.target.value ' + event.target.value)
		// this.props.userInput = event.target.value
		this.setState({
			userInput: event.target.value
		});
	}

	render() {
		return (
			<input
				type="text"
				placeholder="Start Typing"
				value={this.props.searchTerm}
				// value={this.state.userInput}
				onChange={this.filterList}
				autoFocus
			></input>
		);
	}
};
