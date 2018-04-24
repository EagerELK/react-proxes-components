import React from 'react';
import BigNumber from './big-number';

class Storage extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Storage</h4>
    );
  }
}

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  source: '_all.total.store.size_in_bytes',
  format: '0.0b',
};

export default Storage;
