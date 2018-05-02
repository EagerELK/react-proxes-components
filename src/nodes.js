import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class Nodes extends BigNumber {
  getSecondary() {
    try {
      return numeral(this.state.data.nodes.count.master).format(this.props.format) + ' Master Eligible Nodes';
    } catch (e) {
      return 'Calculating';
    }
  }
}

Nodes.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'nodes.count.total',
  format: '0,0',
  panel_type: 'primary',
  icon: 'fa-server',
  title: 'Nodes',
};

export default Nodes;
