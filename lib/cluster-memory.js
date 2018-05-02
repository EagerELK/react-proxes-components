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

var _bigNumber = require('./big-number');

var _bigNumber2 = _interopRequireDefault(_bigNumber);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var ClusterMemory = (function (_BigNumber) {
  _inherits(ClusterMemory, _BigNumber);

  function ClusterMemory() {
    _classCallCheck(this, ClusterMemory);

    _get(Object.getPrototypeOf(ClusterMemory.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ClusterMemory, [{
    key: 'getSecondary',
    value: function getSecondary() {
      try {
        return 'Out of ' + (0, _numeral2['default'])(this.state.data.nodes.jvm.mem.heap_max_in_bytes).format(this.props.format);
      } catch (e) {
        console.log(e);
      }
      return 'Calculating...';
    }
  }]);

  return ClusterMemory;
})(_bigNumber2['default']);

ClusterMemory.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'nodes.jvm.mem.heap_used_in_bytes',
  format: '0.0b',
  panel_type: 'primary',
  icon: 'fa-tachometer',
  title: 'Cluster Memory'
};

exports['default'] = ClusterMemory;
module.exports = exports['default'];