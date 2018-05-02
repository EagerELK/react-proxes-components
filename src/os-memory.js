import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class OSMemory extends BigNumber {
  getSecondary() {
    try {
      return 'Out of ' + numeral(this.state.data.nodes.os.mem.total_in_bytes).format(this.props.format);
    } catch (e) {
      console.log(e);
    }
    return 'Calculating...';
  }
}

OSMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'nodes.os.mem.used_in_bytes',
  format: '0.0b',
  panel_type: 'primary',
  icon: 'fa-tachometer',
  title: 'OS Memory',
};

export default OSMemory;
