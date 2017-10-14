import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';
import moment from 'moment';

class ESTable extends ESPanel {
  constructor(props) {
    super(props);
    this.state.sort_by = 'name';
    this.state.sort_order = 'asc';
  }

  columnHeader(column) {
    if (column.props.hasOwnProperty('name')) return column.props.name;

    return column.props.source.charAt(0).toUpperCase() + column.props.source.slice(1);
  }

  getDescendantProp(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  columnValue(row, column) {
    var format = column.props.format;
    var source = column.props.source;
    var value = this.getDescendantProp(row, source);

    switch (format) {
      case 'string':
        if (value.constructor === Array) {
          value = value.join(', ')
        }
        return value;
        break;

      case 'date':
        return moment(value).format('YYYY-mm-dd HH:mm:ss');
        break;

      case 'size':
        return numeral(value).format('0.0b');
        break;

      case 'number':
        return numeral(value).format('0.0a');
        break;
    }
  }

  compareRows(a, b) {
    if (typeof this.state.sort_by == 'undefined') {
      return 0;
    }

    a = this.getDescendantProp(a, this.state.sort_by);
    b = this.getDescendantProp(b, this.state.sort_by);

    var result = 0;
    if (a < b) {
      result = -1;
    } else if (a > b) {
      result = 1;
    }
    if (this.state.sort_order != 'asc') {
      result = result * -1;
    }
    return result;
  }

  getBody() {
    var rows = this.getRows().sort(this.compareRows.bind(this));

    rows = rows.map(this.getRowItem.bind(this));

    if (rows.length == 0) rows = this.getAlternateBody();

    return (
      <div>
        <div className="panel-body">
          <input type="search" className="search form-control" placeholder="Start typing to filter" />
        </div>
        <table className="table">
          <thead>
            <tr>
              {this.props.children.map( (column) => {
                return (
                  <th key={column.props.source} role="button" onClick={this.sortBy.bind(this)} data-sort={column.props.source}>
                    {this.columnHeader(column)} <i className="fa fa-sort" />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

  getRowItem(row) {
    return (
      <tr key={row.name}>
        {this.props.children.map( (column) => {
          return (
            <td key={column.props.source}>
              {this.columnValue(row, column)}
            </td>
          );
        })}
      </tr>
    );
  }

  getAlternateBody() {
    return (<tr><td colSpan={React.Children.count(this.props.children)}>No data</td></tr>);
  }

  sortBy(event) {
    if (this.state.sort_by == event.target.dataset['sort']) {
      this.state.sort_order = this.state.sort_order == 'asc' ? 'desc' : 'asc';
    } else {
      this.state.sort_order = 'asc';
    }
    this.state.sort_by = event.target.dataset['sort'];
    this.forceUpdate();
  }
}

export default ESTable;
