import React from 'react';
import BigNumber from './big-number';
import numeral from 'numeral';

class ClusterAvailableSpace extends BigNumber {
  dataDidLoad(response) {
    let available = response.data.nodes.fs.available_in_bytes;
    let total = response.data.nodes.fs.total_in_bytes;
    let percentage = available / total * 100;

    let colour = 'success';
    if (percentage < 10) { colour = 'danger'; } else
    if (percentage < 25) { colour = 'warning'; }

    console.log(colour);
    this.setState({
      data: response.data,
      panel_type: colour,
    });
  }

  getSecondary() {
    try {
      return numeral(this.state.data.indices.store.size_in_bytes).format(this.props.format) + ' Primary Storage Used';
    } catch (e) {
      console.log(e);
    }
    return 'Calculating...';
  }
}

ClusterAvailableSpace.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'nodes.fs.available_in_bytes',
  format: '0.0b',
  panel_type: 'info',
  title: 'Available Space',
  icon: 'fa-hdd-o',
};

export default ClusterAvailableSpace;
