import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class Documents extends BigNumber {
  getSecondary() {
    try {
      return numeral(this.state.data.indices.docs.deleted).format(this.props.format) + ' Deleted';
    } catch (e) {
      return 'Calculating';
    }
  }
}

Documents.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'indices.docs.count',
  format: '0,0',
  panel_type: 'primary',
  icon: 'fa-files-o',
  title: 'Documents',
};

export default Documents;
