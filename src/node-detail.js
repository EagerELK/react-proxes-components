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
      return [];
    }

    if (!nodes) return [];

    var rows = [];
    Object.keys(nodes).map(function (value, index) {
      rows.push(nodes[value]);
      rows[index].name = value;
    });

    return rows;
  }
}

NodeDetail.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats'
};

export default NodeDetail;
