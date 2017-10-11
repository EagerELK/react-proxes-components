import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';
import moment from 'moment';

class ESTable extends ESPanel {
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

  getBody() {
    var rows = this.getRows();

    rows = rows.map( (row) => {
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
    });

    if (rows.length == 0) rows = this.getAlternateBody();

    return (
      <table className="table table-responsive table-striped">
        <thead>
          <tr>
            {this.props.children.map( (column) => {
              return (<th key={column.props.source}>{this.columnHeader(column)}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

  getAlternateBody() {
    return (<tr><td colSpan={React.Children.count(this.props.children)}>No data</td></tr>);
  }
}

export default ESTable;
