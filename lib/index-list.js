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

      return _react2['default'].createElement(
        'table',
        { className: 'table table-responsive table-striped' },
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'th',
              null,
              'Name'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'Number of Documents'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'Size'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'Number of Segments'
            )
          )
        ),
        _react2['default'].createElement(
          'tbody',
          null,
          indexRows
        )
      );
    }
  }, {
    key: 'rowItem',
    value: function rowItem(row, index) {
      return _react2['default'].createElement(
        'tr',
        { key: row.name },
        _react2['default'].createElement(
          'td',
          null,
          row.name
        ),
        _react2['default'].createElement(
          'td',
          null,
          (0, _numeral2['default'])(row.primaries.docs.count).format('0,0')
        ),
        _react2['default'].createElement(
          'td',
          null,
          (0, _numeral2['default'])(row.primaries.store.size_in_bytes).format('0.0b')
        ),
        _react2['default'].createElement(
          'td',
          null,
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