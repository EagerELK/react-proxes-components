import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class Storage extends BigNumber {
  getSecondary() {
    let number = 0;
    try {
      number = this.state.data._all.total.store.size_in_bytes;
      return numeral(number).format(this.props.format) + ' including Replicas';
    } catch (e) {
      // console.log(e);
    }
    return 'Calculating...';
  }
}

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  source: '_all.primaries.store.size_in_bytes',
  format: '0.0b',
  icon: 'fa-hdd-o',
  panel_type: 'primary',
  title: 'Storage',
};

export default Storage;
