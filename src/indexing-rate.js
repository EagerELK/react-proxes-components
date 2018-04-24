import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './big-number';

class IndexingRate extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-line-chart';
    return (
      <h4><i className={icon}></i> Indexing Rate <small>Documents / Second</small></h4>
    );
  }

  calculateValue(source) {
    try {
      if (source) {
        let indexed = source['index_total'];
        let time = source['index_time_in_millis'];
        return time == 0 ? 0 : indexed / ( time / 1000.0);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

IndexingRate.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  source: '_all.primaries.indexing',
  format: '0.0[000]',
};

IndexingRate.propTypes = {
  data_path: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default IndexingRate;
