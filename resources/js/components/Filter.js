import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Filter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [
				"go to the store",
				"wash the dishes",
				"learn some code"
			]
		};
	}

	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-body">
						test
					</div>
				</div>
			</div>
		);
	}
}

export default Filter;

ReactDOM.render(<Filter />, document.getElementById('example'));