import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';

class NodeDetail extends ESPanel {
  getHeading() {
    return (<h4>Node Detail</h4>);
  }

  getBody() {
    var nodes;
    try {
      nodes = this.state.data.nodes;
    } catch (e) { }

    if (nodes) {
      var rows = [];
      Object.keys(nodes).map(function (value, index) {
        rows.push(nodes[value]);
        rows[index].name = value;
      });

      var nodeRows = rows.map(this.rowItem);
    } else {
      var nodeRows = (<tr><td colSpan="3">No Nodes</td></tr>);
    }

    return (
      <table className="table table-responsive table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>indices.docs.count</th>
          <th>indices.store.size_in_bytes</th>
        </tr>
        </thead>
        <tbody>
          {nodeRows}
        </tbody>
      </table>
    );
  }

  rowItem(row, index) {
    return (
      <tr key={row.name}>
        <td>{row.name}</td>
        <td>{row.indices.docs.count}</td>
        <td>{numeral(row.indices.store.size_in_bytes).format('0b')}</td>
      </tr>
    );
  }
}

NodeDetail.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats'
};

export default NodeDetail;
