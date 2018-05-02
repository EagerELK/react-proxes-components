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

var Storage = (function (_BigNumber) {
  _inherits(Storage, _BigNumber);

  function Storage() {
    _classCallCheck(this, Storage);

    _get(Object.getPrototypeOf(Storage.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Storage, [{
    key: 'dataDidLoad',
    value: function dataDidLoad(response) {
      var available = response.data.nodes.fs.available_in_bytes;
      var total = response.data.nodes.fs.total_in_bytes;
      var percentage = available / total * 100;

      var colour = 'green';
      if (percentage < 10) {
        colour = 'red';
      } else if (percentage < 25) {
        colour = 'yellow';
      }

      this.setState({
        data: response.data,
        panel_type: colour
      });
    }
  }, {
    key: 'getSecondary',
    value: function getSecondary() {
      try {
        return this.state.percentage + ' available';
      } catch (e) {
        console.log(e);
      }
      return 'Calculating...';
    }
  }]);

  return Storage;
})(_bigNumber2['default']);

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/stats',
  source: 'indices.store.size_in_bytes',
  format: '0.0b',
  panel_type: 'info',
  title: 'Storage',
  icon: 'fa-hdd-o'
};

exports['default'] = Storage;
module.exports = exports['default'];