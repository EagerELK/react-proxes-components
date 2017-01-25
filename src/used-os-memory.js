import React from 'react';
import BigNumber from './big-number';

class UsedOSMemory extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Used OS Memory</h4>
    );
  }
}

UsedOSMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'os.mem.used_in_bytes',
};

export default UsedOSMemory;
