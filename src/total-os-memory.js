import React from 'react';
import BigNumber from './big-number';

class TotalOSMemory extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Total OS Memory</h4>
    );
  }
}

TotalOSMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'os.mem.total_in_bytes',
};

export default TotalOSMemory;
