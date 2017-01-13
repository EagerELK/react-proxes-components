import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';

class NodeInfo extends ESPanel {
  getHeading() {
    return (<h4>Nodes</h4>);
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
      var nodeRows = (<tr><td colSpan="4">No Nodes</td></tr>);
    }

    return (
      <table className="table table-responsive table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Host</th>
          <th>Version</th>
          <th>OS Name</th>
          <th>Java Version</th>
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
        <td>{row.host}</td>
        <td>{row.version}</td>
        <td>{row.os.name}</td>
        <td>{row.jvm.version}</td>
      </tr>
    );
  }
}

NodeInfo.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes'
};

export default NodeInfo;
