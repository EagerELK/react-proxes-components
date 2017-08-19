import React from 'react';
import ESPanel from './es-panel';
import UpdateFooter from './update-footer';
import numeral from 'numeral';
import List from "list.js"

class IndexList extends ESPanel {
  getHeading() {
    return (<h4>Index Statistics</h4>);
  }

  componentDidMount() {
    super.componentDidMount();
    new List('index-list', { valueNames: [ 'name', 'documents', 'size', 'segments' ] });
  }

  render() {
    return (
      <div id="index-list" className="panel panel-default">
        <div className="panel-heading">
          {this.getHeading()}
        </div>
        {this.getBody()}
        <UpdateFooter lastUpdated={this.state.last_updated} updateCallback={this.refresh}/>
      </div>
    );
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
      [
        <div className="panel-body">
          <input type="search" className="search form-control" placeholder="Type here to filter shards" />
        </div>,
        <table className="table table-responsive table-striped table-condensed">
          <thead>
          <tr>
            <th className="sort" role="button" data-sort="name">Name <i className="fa fa-sort" /></th>
            <th className="sort" role="button" data-sort="documents">Number of Documents <i className="fa fa-sort" /></th>
            <th className="sort" role="button" data-sort="size">Size <i className="fa fa-sort" /></th>
            <th className="sort" role="button" data-sort="segments">Number of Segments <i className="fa fa-sort" /></th>
          </tr>
          </thead>
          <tbody className="list">
            {indexRows}
          </tbody>
        </table>
      ]
    );
  }

  rowItem(row, index) {
    return (
      <tr key={row.name}>
        <td className="name">{row.name}</td>
        <td className="documents">{numeral(row.primaries.docs.count).format('0,0')}</td>
        <td className="size">{numeral(row.primaries.store.size_in_bytes).format('0.0b')}</td>
        <td className="segments">{numeral(row.primaries.segments.count).format('0,0')}</td>
      </tr>
    );
  }
}

IndexList.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

export default IndexList;
