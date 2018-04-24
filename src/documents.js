import React from 'react';
import BigNumber from './big-number';

class Documents extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-files-o';
    return (
      <h4><i className={icon}></i> Documents</h4>
    );
  }
}

Documents.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  source: '_all.total.docs.count',
  format: '0,0',
};

export default Documents;
