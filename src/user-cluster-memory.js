import React from 'react';
import BigNumber from './big-number';

class UserClusterMemory extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> User Cluster Memory</h4>
    );
  }
}

UserClusterMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'jvm.mem.heap_used_in_bytes',
};

export default UserClusterMemory;
