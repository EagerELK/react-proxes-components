import React from 'react';
import PropTypes from 'prop-types';
import ESPanel from './es-panel';
import numeral from 'numeral';
import UpdateFooter from './update-footer';

class BigNumber extends ESPanel {
  constructor(props) {
    super(props);
  }

  getDescendantProp (obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  getValue() {
    try {
      if (this.state.hasOwnProperty('data')) {
        let source = this.getDescendantProp(this.state.data, this.props.source);
        if (typeof this.calculateValue != 'undefined') {
          source = this.calculateValue.call(this, source);
        }
        return numeral(source).format(this.props.format);
      }
    } catch(e) {
      console.log(e);
    }
  }

  getSecondary() {
    return '';
  }

  getBody() {
    let value = this.getValue();
    let secondary = this.getSecondary();
    return (
      <div className="panel-body text-right">
        <div className="huge">{value ? value : 'Unknown'}</div>
        <div>{secondary}</div>
      </div>
    );
  }
}

BigNumber.propTypes = {
  data_path: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  field: PropTypes.string,
  format: PropTypes.string,
  panel_type: PropTypes.string,
};

BigNumber.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  format: '0.0b',
  panel_type: 'default',
};

export default BigNumber;
