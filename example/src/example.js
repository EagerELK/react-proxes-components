import React from 'react';
import ReactDOM from 'react-dom';

var React2 = require('react-2');

var App = React.createClass({
	render () {
		return (
			<div>
				<React2 />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
