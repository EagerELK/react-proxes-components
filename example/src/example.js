import React from 'react';
import ReactDOM from 'react-dom';

var ProxesComponents = require('react-proxes-components');

var App = React.createClass({
	render () {
		return (
			<div>
				<ProxesComponents />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
