import React from "react";
// import ReactDOM from "react-dom";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/searchBar"

// Table Data
class TableData extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div>
			<p className="table-data-display">Manager: {this.props.rowdata.shop_manager} <a className="shop-number" href={"tel:"+this.props.rowdata.shop_mobile}> <i className="fa fa-phone fa-lg md-view"></i><span className="l-view">({this.props.rowdata.shop_mobile})</span></a></p>

			<p className="table-data-display"> <span>{this.props.data}</span> <a className="shop-number" href={this.props.rowdata.map_link}><i className="fa fa-map-marker fa-2x md-view"></i> <span className="l-view">Show on Map</span></a></p>
		</div>);
	}
};

// Table Element
class TableTitle extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2> {this.props.title} ({this.props.shopCode})</h2>
			</div>
		);
	}
};

class SearchMatch extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.match)
	}
	render() {
		return (
			<div style={{fontSize:'0.5rem', display:'none'}}>
				<p> Match: {this.props.match}</p>
			</div>
		);
	}
};

// Table
class Table extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let keyCount = 0;
		// We need to get each row and store it in an array
		var rowsTitle = [];
		var search = [];
		var searchterm = this.props.searchTerm; // need this or it doesnt work
		var key = "";
		this.props.data.forEach(function (row) {
			if (
				row.shop_name.toLowerCase().indexOf(searchterm.toLowerCase()) ===
				-1 &&
				row.shop_adress.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
			)
				return;

			// need to grab the correct match
			if (
				row.shop_name.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
			) {
				var m = row.shop_adress.toLowerCase().split(" ");
				for (var i in m)
					if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
						key = m[i];
			} else {
				key = row.shop_name.toLowerCase();
			}

			rowsTitle.push(<TableTitle key={keyCount+=1} title={row.shop_name} shopCode={row.shop_code}/>);
			if (searchterm != "") rowsTitle.push(<SearchMatch match={key} />);
			rowsTitle.push(<TableData key={keyCount+=1} data={row.shop_adress} manager={row.shop_manager} contact={row.shop_mobile} rowdata={row} />);
		});

		// Then render all. Render using childs. Send them prop.title and prop.data
		return (<div className="whole-div">{rowsTitle}</div>);
	}
};
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			filterText: '',
			DATA: {}
		}
		this.handleUserInput = this.handleUserInput.bind(this);
	}
	// async componentDidMount() {
	// 	fetch('http://localhost:8000/en/api/shop/', { mode: "no-cors" })
	// 		.then(res => {
	// 			console.log(res)
	// 			return res.json();
	// 		})
	// 		.then(data => {
	// 			console.log(data)
	// 			this.setState({
	// 				DATA: data
	// 			});
	// 			// shop_list = data;
	// 		})
	// }
	handleUserInput(filter) {
		// console.log('handleUserInput ' + filter)
		this.setState({
			filterText: filter
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>*/}
					<Search
						searchTerm={this.state.filterText}
						userInput={this.handleUserInput}
					/>
					<Table
						searchTerm={this.state.filterText}
						data={this.props.data}
					/>
				</header>
			</div>
		);
	}
}
