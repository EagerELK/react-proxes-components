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

  getBody() {
    var total;
    try {
      if (this.state.hasOwnProperty('data') || this.state.data.hasOwnProperty(this.props.source)) {
        total = 0;

        let source = this.getDescendantProp(this.state.data, this.props.source);

        for (let i in source) {
          total += this.getDescendantProp(source[i], this.props.field);
        }
      }
    } catch(e) { }

    return (
      <div className="panel-body">
        <p className="lead">{total ? numeral(total).format('0.0b') : 'Unknown'}</p>
      </div>
    );
  }
}

BigNumber.propTypes = {
  data_path: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

BigNumber.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
};

export default BigNumber;
