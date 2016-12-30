import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';

class IndexList extends ESPanel {
  getHeading() {
    return (<h4>Index Statistics</h4>);
  }

  getBody() {
    var indices;
    try {
      indices = this.state.data.indices;
    } catch (e) { }

    if (indices) {
      var rows = [];
      Object.keys(indices).map(function (value, index) {
        rows.push(indices[value]);
        rows[index].name = value;
      });

      var indexRows = rows.map(this.rowItem);
    } else {
      var indexRows = (<tr><td colSpan="4">No Indices</td></tr>);
    }

    return (
      <table className="table table-responsive table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Number of Documents</th>
          <th>Size</th>
          <th>Number of Segments</th>
        </tr>
        </thead>
        <tbody>
          {indexRows}
        </tbody>
      </table>
    );
  }

  rowItem(row, index) {
    return (
      <tr key={row.name}>
        <td>{row.name}</td>
        <td>{numeral(row.primaries.docs.count).format('0,0')}</td>
        <td>{numeral(row.primaries.store.size_in_bytes).format('0.0b')}</td>
        <td>{numeral(row.primaries.segments.count).format('0,0')}</td>
      </tr>
    );
  }
}

IndexList.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

export default IndexList;
