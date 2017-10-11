import React from 'react';
import PropTypes from 'prop-types';

class TableColumn extends React.Component {}

TableColumn.propTypes = {
	source: PropTypes.any.isRequired,
	name: PropTypes.string,
	format: PropTypes.oneOf(['date', 'size', 'number', 'string'])
};

TableColumn.defaultProps = {
	format: 'string'
};

export default TableColumn;
