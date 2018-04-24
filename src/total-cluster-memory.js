import React from 'react';
import BigNumber from './big-number';

class TotalClusterMemory extends BigNumber {
  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Total Cluster Memory</h4>
    );
  }

  calculateValue(source) {
    let total;
    try {
      total = 0;
      for (let i in source) {
        let value = this.getDescendantProp(source[i], this.props.field);
        total += value;
      }
    } catch (e) {
      console.log(e);
    }
    return total;
  }
}

TotalClusterMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'jvm.mem.heap_max_in_bytes',
  format: '0.0b',
};

export default TotalClusterMemory;
