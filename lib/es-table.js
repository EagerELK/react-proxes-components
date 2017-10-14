'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _esPanel = require('./es-panel');

var _esPanel2 = _interopRequireDefault(_esPanel);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var ESTable = (function (_ESPanel) {
  _inherits(ESTable, _ESPanel);

  function ESTable(props) {
    _classCallCheck(this, ESTable);

    _get(Object.getPrototypeOf(ESTable.prototype), 'constructor', this).call(this, props);
    this.state.sort_by = 'name';
    this.state.sort_order = 'asc';
  }

  _createClass(ESTable, [{
    key: 'columnHeader',
    value: function columnHeader(column) {
      if (column.props.hasOwnProperty('name')) return column.props.name;

      return column.props.source.charAt(0).toUpperCase() + column.props.source.slice(1);
    }
  }, {
    key: 'getDescendantProp',
    value: function getDescendantProp(obj, path) {
      return path.split('.').reduce(function (acc, part) {
        return acc && acc[part];
      }, obj);
    }
  }, {
    key: 'columnValue',
    value: function columnValue(row, column) {
      var format = column.props.format;
      var source = column.props.source;
      var value = this.getDescendantProp(row, source);

      switch (format) {
        case 'string':
          if (value.constructor === Array) {
            value = value.join(', ');
          }
          return value;
          break;

        case 'date':
          return (0, _moment2['default'])(value).format('YYYY-mm-dd HH:mm:ss');
          break;

        case 'size':
          return (0, _numeral2['default'])(value).format('0.0b');
          break;

        case 'number':
          return (0, _numeral2['default'])(value).format('0.0a');
          break;
      }
    }
  }, {
    key: 'compareRows',
    value: function compareRows(a, b) {
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
  }, {
    key: 'getBody',
    value: function getBody() {
      var _this = this;

      var rows = this.getRows().sort(this.compareRows.bind(this));

      rows = rows.map(this.getRowItem.bind(this));

      if (rows.length == 0) rows = this.getAlternateBody();

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'panel-body' },
          _react2['default'].createElement('input', { type: 'search', className: 'search form-control', placeholder: 'Start typing to filter' })
        ),
        _react2['default'].createElement(
          'table',
          { className: 'table' },
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              null,
              this.props.children.map(function (column) {
                return _react2['default'].createElement(
                  'th',
                  { key: column.props.source, role: 'button', onClick: _this.sortBy.bind(_this), 'data-sort': column.props.source },
                  _this.columnHeader(column),
                  ' ',
                  _react2['default'].createElement('i', { className: 'fa fa-sort' })
                );
              })
            )
          ),
          _react2['default'].createElement(
            'tbody',
            null,
            rows
          )
        )
      );
    }
  }, {
    key: 'getRowItem',
    value: function getRowItem(row) {
      var _this2 = this;

      return _react2['default'].createElement(
        'tr',
        { key: row.name },
        this.props.children.map(function (column) {
          return _react2['default'].createElement(
            'td',
            { key: column.props.source },
            _this2.columnValue(row, column)
          );
        })
      );
    }
  }, {
    key: 'getAlternateBody',
    value: function getAlternateBody() {
      return _react2['default'].createElement(
        'tr',
        null,
        _react2['default'].createElement(
          'td',
          { colSpan: _react2['default'].Children.count(this.props.children) },
          'No data'
        )
      );
    }
  }, {
    key: 'sortBy',
    value: function sortBy(event) {
      if (this.state.sort_by == event.target.dataset['sort']) {
        this.state.sort_order = this.state.sort_order == 'asc' ? 'desc' : 'asc';
      } else {
        this.state.sort_order = 'asc';
      }
      this.state.sort_by = event.target.dataset['sort'];
      this.forceUpdate();
    }
  }]);

  return ESTable;
})(_esPanel2['default']);

exports['default'] = ESTable;
module.exports = exports['default'];