import React from 'react';
import numeral from 'numeral';

class TableField extends React.Component {

	render() {
		var value;

		switch (this.props.format) {
			case 'string':
				value = this.props.source;
				break;

			case 'date':
				value = 'Momentum';
				break;

			case 'size':
				value = numeral(this.props.source).format('0.0b');
				break;

			case 'number':
				value = numeral(this.props.source).format('0.0a');
				break;
		}

		return(
			<div>
				{value}
			</div>
		);
	}

}

TableField.propTypes = {
	source: React.PropTypes.any.isRequired,
	name: React.PropTypes.string,
	format: React.PropTypes.oneOf(['date', 'size', 'number', 'string'])
};

TableField.defaultProps = {
	format: 'string'
};

export default TableField;
