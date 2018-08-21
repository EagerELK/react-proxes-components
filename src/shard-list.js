import React from 'react';
import ESTable from './es-table';

class ShardList extends ESTable {
  getHeading() {
    return (<h4>Shard Listing</h4>);
  }

  getRows() {
    var shards = [];
    try {
        shards = this.state.data;
    } catch (e) {
      console.log(e);
      return [];
    }

    if (!shards) { return []; }

    var rows = [];
    Object.keys(shards).map((value, index) => {
      // already an array from the json
      // but does not have JS array objects on it, which is why we still need map to an array
      rows.push(shards[index]);

      // using this to create a unique key for the array for ReactDOM and for sorting on name
      rows[index].name = shards[index].index + '_' + shards[index].node + '_' + shards[index].shard;
      rows[index].prirep_label = (shards[index].prirep == 'p') ? 'PRIMARY' : 'REPLICA';
    });
    return rows;
  }

  getAlternateBody() {
    return (<tr key="no-indices"><td colSpan="4">No Indices</td></tr>);
  }
}

ShardList.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cat/shards?format=json',
  panel_type: 'default',
};

export default ShardList;
