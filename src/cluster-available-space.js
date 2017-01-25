import React from 'react';
import BigNumber from './big-number';

class ClusterAvailableSpace extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Cluster Available Space</h4>
    );
  }
}

ClusterAvailableSpace.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'fs.total.available_in_bytes',
};

export default ClusterAvailableSpace;
