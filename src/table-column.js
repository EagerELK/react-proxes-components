import React from 'react';

class TableColumn extends React.Component {}

TableColumn.propTypes = {
	source: React.PropTypes.any.isRequired,
	name: React.PropTypes.string,
	format: React.PropTypes.oneOf(['date', 'size', 'number', 'string'])
};

TableColumn.defaultProps = {
	format: 'string'
};

export default TableColumn;
