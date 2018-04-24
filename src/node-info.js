import React from 'react';
import ESTable from './es-table';

class NodeInfo extends ESTable {
  getHeading() {
    return (<h4>Nodes</h4>);
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

    var rows = [];
    Object.keys(nodes).map(function (value, index) {
      if (typeof(nodes[value].name) === 'undefined') {
        nodes[value].name = value;
      }
      rows.push(nodes[value]);
    });

    return rows;
  }
}

NodeInfo.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes'
};

export default NodeInfo;
