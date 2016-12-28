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

var Storage = (function (_ESPanel) {
  _inherits(Storage, _ESPanel);

  function Storage(props) {
    _classCallCheck(this, Storage);

    _get(Object.getPrototypeOf(Storage.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Storage, [{
    key: 'getHeading',
    value: function getHeading() {
      var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
      return _react2['default'].createElement(
        'h4',
        null,
        _react2['default'].createElement('i', { className: icon }),
        ' Storage'
      );
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var storage;
      try {
        storage = this.state.data._all.total.store.size_in_bytes;
      } catch (e) {}

      return _react2['default'].createElement(
        'div',
        { className: 'panel-body' },
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          storage ? (0, _numeral2['default'])(storage).format('0.0b') : 'Unknown'
        )
      );
    }
  }]);

  return Storage;
})(_esPanel2['default']);

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

exports['default'] = Storage;
module.exports = exports['default'];