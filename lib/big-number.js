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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _esPanel = require('./es-panel');

var _esPanel2 = _interopRequireDefault(_esPanel);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _updateFooter = require('./update-footer');

var _updateFooter2 = _interopRequireDefault(_updateFooter);

var BigNumber = (function (_ESPanel) {
  _inherits(BigNumber, _ESPanel);

  function BigNumber(props) {
    _classCallCheck(this, BigNumber);

    _get(Object.getPrototypeOf(BigNumber.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BigNumber, [{
    key: 'getDescendantProp',
    value: function getDescendantProp(obj, path) {
      return path.split('.').reduce(function (acc, part) {
        return acc && acc[part];
      }, obj);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      try {
        if (this.state.hasOwnProperty('data')) {
          var source = this.getDescendantProp(this.state.data, this.props.source);
          if (typeof this.calculateValue != 'undefined') {
            source = this.calculateValue.call(this, source);
          }
          return (0, _numeral2['default'])(source).format(this.props.format);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'getSecondary',
    value: function getSecondary() {
      return '';
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var value = this.getValue();
      var secondary = this.getSecondary();
      return _react2['default'].createElement(
        'div',
        { className: 'panel-body text-right' },
        _react2['default'].createElement(
          'div',
          { className: 'huge' },
          value ? value : 'Unknown'
        ),
        _react2['default'].createElement(
          'div',
          null,
          secondary
        )
      );
    }
  }]);

  return BigNumber;
})(_esPanel2['default']);

BigNumber.propTypes = {
  data_path: _propTypes2['default'].string.isRequired,
  source: _propTypes2['default'].string.isRequired,
  field: _propTypes2['default'].string,
  format: _propTypes2['default'].string,
  panel_type: _propTypes2['default'].string
};

BigNumber.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  format: '0.0b',
  panel_type: 'default'
};

exports['default'] = BigNumber;
module.exports = exports['default'];