import React from 'react';
import BigNumber from './big-number';

class Documents extends BigNumber {
  getSecondary() {
    return 'Documents';
  }
}

Documents.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  source: '_all.total.docs.count',
  format: '0,0',
  panel_type: 'primary',
  icon: 'fa-files-o',
  title: 'Documents',
};

export default Documents;
