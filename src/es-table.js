import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';
import moment from 'moment';
import naturalCompare from 'string-natural-compare';

const fillRange = (start, end) => {
  return Array(end - start + 1).fill().map((item, index) => start + index);
};

class ESTable extends ESPanel {
  constructor(props) {
    super(props);
    this.state.sort_by = 'name';
    this.state.sort_order = 'asc';
    this.state.search = '';

    this.state.currentPage = 1;
    this.state.sizePerPage = 10;
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

    var result = naturalCompare(a, b);
    if (this.state.sort_order != 'asc') {
      result = result * -1;
    }
    return result;
  }

  findRow(row) {
    var search = this.state.search;
    if (search == '') {
      return true;
    }

    return this.props.children.some((column) => {
      var value = this.getDescendantProp(row, column.props.source);
      // toLowerCase to make search case insensitive
      return value.toString().toLowerCase().indexOf(search) !== -1;
    });
  }

  pageRows(row, index) {
    let currentStartItem = this.state.sizePerPage * (this.state.currentPage - 1);
    return index >= (currentStartItem) && index < (currentStartItem) + this.state.sizePerPage;
  }

  getBody() {
    var rows = this.getRows()
      .filter(this.findRow.bind(this))
      .sort(this.compareRows.bind(this))
      .filter(this.pageRows.bind(this));

    rows = rows.map(this.getRowItem.bind(this));

    if (rows.length === 0) rows = this.getAlternateBody();

    return (
      <div>
        <div className="panel-body">
          <input type="search" className="search form-control" placeholder="Start typing to filter" onChange={this.filterRows.bind(this)}/>
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

        <select className="form-control" value={this.state.sizePerPage} onChange={this.changePageSize.bind(this)}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="9999">All</option>
        </select>

        {
          // inline conditional rendering (https://reactjs.org/docs/conditional-rendering.html)
          this.numPages() > 1  &&
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={(this.state.currentPage == 1) ? 'disabled' : ''}>
                <a href="javascript:void(0)" aria-label="Previous" onClick={this.prevPage.bind(this)}>
                  <span aria-hidden="true">Prev</span>
                </a>
              </li>

              {
                fillRange(1, this.numPages()).map((i) => {
                  return (
                    <li className={(this.state.currentPage === i) ? 'active' : ''} key={i}>
                      <a href="javascript:void(0)" onClick={(e) => this.gotoPage(i, e)}>{i}</a>
                    </li>
                  );
                })
              }

              <li className={(this.state.currentPage == this.numPages()) ? 'disabled' : ''}>
                <a href="javascript:void(0)" aria-label="Next" onClick={this.nextPage.bind(this)}>
                  <span aria-hidden="true">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        }
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

  filterRows(event) {
    this.state.search = event.target.value;
    this.forceUpdate();
  }

  sortBy(event) {
    if (this.state.sort_by === event.target.dataset['sort']) {
      this.state.sort_order = this.state.sort_order === 'asc' ? 'desc' : 'asc';
    } else {
      this.state.sort_order = 'asc';
    }
    this.state.sort_by = event.target.dataset['sort'];
    this.forceUpdate();
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.state.currentPage--;
      this.forceUpdate();
    }
  }

  nextPage() {
    if (this.state.currentPage < this.numPages()) {
      this.state.currentPage++;
      this.forceUpdate();
    }
  }

  gotoPage(page, event) {
    if (page > 0 && page <= this.numPages()) {
      this.state.currentPage = page;
      this.forceUpdate();
    }
  }

  changePageSize(event) {
    this.state.sizePerPage = parseInt(event.target.value);

    if (this.state.currentPage > this.numPages()) {
      this.state.currentPage = this.numPages();
    }

    this.forceUpdate();
  }

  numPages() {
    return Math.ceil(this.getRows().length / this.state.sizePerPage);
  }
}

export default ESTable;
