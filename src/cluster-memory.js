import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class ClusterMemory extends BigNumber {
  getSecondary() {
    try {
      return 'Out of ' + numeral(this.state.data.nodes.jvm.mem.heap_max_in_bytes).format(this.props.format);
    } catch (e) {
      console.log(e);
    }
    return 'Calculating...';
  }
}

ClusterMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'nodes.jvm.mem.heap_used_in_bytes',
  format: '0.0b',
  panel_type: 'primary',
  icon: 'fa-tachometer',
  title: 'Cluster Memory',
};

export default ClusterMemory;
