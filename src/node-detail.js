import React from 'react';
import ESTable from './es-table';

class NodeDetail extends ESTable {
  getHeading() {
    return (<h4>Node Detail</h4>);
  }

  getRows() {
    var nodes;
    try {
      nodes = this.state.data.nodes;
    } catch (e) {
      console.log(e);
      return [];
    }

    if (!nodes) return [];

    return Object.keys(nodes).map(function (value, index) {
      if (typeof(nodes[value].name) === 'undefined') {
        nodes[value].name = value;
      }
      return nodes[value];
    });
  }
}

NodeDetail.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats'
};

export default NodeDetail;
