import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class Storage extends BigNumber {
  dataDidLoad(response) {
    let available = response.data.nodes.fs.available_in_bytes;
    let total = response.data.nodes.fs.total_in_bytes;
    let percentage = available / total * 100;

    let colour = 'green';
    if (percentage < 10) { colour = 'red'; } else
    if (percentage < 25) { colour = 'yellow'; }

    this.setState({
      data: response.data,
      panel_type: colour,
    });
  }

  getSecondary() {
    try {
      return this.state.percentage + ' available';
    } catch (e) {
      console.log(e);
    }
    return 'Calculating...';
  }
}

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'indices.store.size_in_bytes',
  format: '0.0b',
  panel_type: 'info',
  title: 'Storage',
  icon: 'fa-hdd-o',
};

export default Storage;
