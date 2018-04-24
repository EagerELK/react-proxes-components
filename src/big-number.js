import React from 'react';
import PropTypes from 'prop-types';
import ESPanel from './es-panel';
import numeral from 'numeral';

class BigNumber extends ESPanel {
  constructor(props) {
    super(props);
  }

  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    var title = this.props.title ? this.props.title : this.props.field;
    return (
      <h4><i className={icon}></i> {title}</h4>
    );
  }

  getDescendantProp (obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  getValue() {
    try {
      if (this.state.hasOwnProperty('data')) {
        let source = this.getDescendantProp(this.state.data, this.props.source);
        if (typeof this.calculateValue == 'undefined') {
          return source;
        }
        return this.calculateValue.call(this, source);
      }
    } catch(e) {
      console.log(e);
    }
  }

  getBody() {
    var value = this.getValue();
    return (
      <div className="panel-body">
        <p className="lead">{value ? numeral(value).format(this.props.format) : 'Unknown'}</p>
      </div>
    );
  }
}

BigNumber.propTypes = {
  data_path: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  field: PropTypes.string,
  format: PropTypes.string,
};

BigNumber.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  format: '0.0b',
};

export default BigNumber;
