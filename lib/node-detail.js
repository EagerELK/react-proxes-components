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

var _esTable = require('./es-table');

var _esTable2 = _interopRequireDefault(_esTable);

var NodeDetail = (function (_ESTable) {
  _inherits(NodeDetail, _ESTable);

  function NodeDetail() {
    _classCallCheck(this, NodeDetail);

    _get(Object.getPrototypeOf(NodeDetail.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(NodeDetail, [{
    key: 'getHeading',
    value: function getHeading() {
      return _react2['default'].createElement(
        'h4',
        null,
        'Node Detail'
      );
    }
  }, {
    key: 'getRows',
    value: function getRows() {
      var nodes;
      try {
        nodes = this.state.data.nodes;
      } catch (e) {
        console.log(e);
        return [];
      }

      if (!nodes) return [];

      return Object.keys(nodes).map(function (value, index) {
        if (typeof nodes[value].name === 'undefined') {
          nodes[value].name = value;
        }
        return nodes[value];
      });
    }
  }]);

  return NodeDetail;
})(_esTable2['default']);

NodeDetail.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_nodes/stats',
  panel_type: 'default'
};

exports['default'] = NodeDetail;
module.exports = exports['default'];