import React from 'react';
import BigNumber from './big-number';

class ClusterAvailableSpace extends BigNumber {
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

  getSecondary() {
    try {
      return 'On ' + this.state.data._nodes.total + ' nodes';
    } catch (e) {
      console.log(e);
    }
    return 'Calculating...';
  }
}

ClusterAvailableSpace.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  source: 'nodes',
  field: 'fs.total.available_in_bytes',
  format: '0.0b',
  panel_type: 'info',
  title: 'Available Space',
  icon: 'fa-hdd-o',
};

export default ClusterAvailableSpace;
