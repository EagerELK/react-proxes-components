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

var _updateFooter = require('./update-footer');

var _updateFooter2 = _interopRequireDefault(_updateFooter);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _listJs = require("list.js");

var _listJs2 = _interopRequireDefault(_listJs);

var IndexList = (function (_ESPanel) {
  _inherits(IndexList, _ESPanel);

  function IndexList() {
    _classCallCheck(this, IndexList);

    _get(Object.getPrototypeOf(IndexList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(IndexList, [{
    key: 'getHeading',
    value: function getHeading() {
      return _react2['default'].createElement(
        'h4',
        null,
        'Index Statistics'
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(IndexList.prototype), 'componentDidMount', this).call(this);
      new _listJs2['default']('index-list', { valueNames: ['name', 'documents', 'size', 'segments'] });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'index-list', className: 'panel panel-default' },
        _react2['default'].createElement(
          'div',
          { className: 'panel-heading' },
          this.getHeading()
        ),
        this.getBody(),
        _react2['default'].createElement(_updateFooter2['default'], { lastUpdated: this.state.last_updated, updateCallback: this.refresh })
      );
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var indices;
      try {
        indices = this.state.data.indices;
      } catch (e) {}

      if (indices) {
        var rows = [];
        Object.keys(indices).map(function (value, index) {
          rows.push(indices[value]);
          rows[index].name = value;
        });

        var indexRows = rows.map(this.rowItem);
      } else {
        var indexRows = _react2['default'].createElement(
          'tr',
          null,
          _react2['default'].createElement(
            'td',
            { colSpan: '4' },
            'No Indices'
          )
        );
      }

      return [_react2['default'].createElement(
        'div',
        { className: 'panel-body' },
        _react2['default'].createElement('input', { type: 'search', className: 'search form-control', placeholder: 'Type here to filter shards' })
      ), _react2['default'].createElement(
        'table',
        { className: 'table table-responsive table-striped table-condensed' },
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'th',
              { className: 'sort', role: 'button', 'data-sort': 'name' },
              'Name ',
              _react2['default'].createElement('i', { className: 'fa fa-sort' })
            ),
            _react2['default'].createElement(
              'th',
              { className: 'sort', role: 'button', 'data-sort': 'documents' },
              'Number of Documents ',
              _react2['default'].createElement('i', { className: 'fa fa-sort' })
            ),
            _react2['default'].createElement(
              'th',
              { className: 'sort', role: 'button', 'data-sort': 'size' },
              'Size ',
              _react2['default'].createElement('i', { className: 'fa fa-sort' })
            ),
            _react2['default'].createElement(
              'th',
              { className: 'sort', role: 'button', 'data-sort': 'segments' },
              'Number of Segments ',
              _react2['default'].createElement('i', { className: 'fa fa-sort' })
            )
          )
        ),
        _react2['default'].createElement(
          'tbody',
          { className: 'list' },
          indexRows
        )
      )];
    }
  }, {
    key: 'rowItem',
    value: function rowItem(row, index) {
      return _react2['default'].createElement(
        'tr',
        { key: row.name },
        _react2['default'].createElement(
          'td',
          { className: 'name' },
          row.name
        ),
        _react2['default'].createElement(
          'td',
          { className: 'documents' },
          (0, _numeral2['default'])(row.primaries.docs.count).format('0,0')
        ),
        _react2['default'].createElement(
          'td',
          { className: 'size' },
          (0, _numeral2['default'])(row.primaries.store.size_in_bytes).format('0.0b')
        ),
        _react2['default'].createElement(
          'td',
          { className: 'segments' },
          (0, _numeral2['default'])(row.primaries.segments.count).format('0,0')
        )
      );
    }
  }]);

  return IndexList;
})(_esPanel2['default']);

IndexList.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

exports['default'] = IndexList;
module.exports = exports['default'];