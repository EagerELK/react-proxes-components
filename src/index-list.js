import React from 'react';
import ESTable from './es-table';
import UpdateFooter from './update-footer';
import numeral from 'numeral';

class IndexList extends ESTable {
  getHeading() {
    return (<h4>Index Statistics</h4>);
  }

  getRows() {
    var indices = []
    try {
      indices = this.state.data.indices;
    } catch (e) {
      console.log(e);
      return [];
    }

    if (!indices) { return []; }

    var rows = [];
    Object.keys(indices).map((value, index) => {
      rows.push(indices[value]);
      rows[index].name = value;
    });
    return rows;
  }

  getAlternateBody() {
    return (<tr key="no-indices"><td colSpan="4">No Indices</td></tr>);
  }
}

IndexList.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats',
  panel_type: 'default',
};

export default IndexList;
