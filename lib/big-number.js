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

var BigNumber = (function (_ESPanel) {
  _inherits(BigNumber, _ESPanel);

  function BigNumber(props) {
    _classCallCheck(this, BigNumber);

    _get(Object.getPrototypeOf(BigNumber.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BigNumber, [{
    key: 'getHeading',
    value: function getHeading() {
      var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
      var title = this.props.title ? this.props.title : this.props.field;
      return _react2['default'].createElement(
        'h4',
        null,
        _react2['default'].createElement('i', { className: icon }),
        ' ',
        title
      );
    }
  }, {
    key: 'getDescendantProp',
    value: function getDescendantProp(obj, path) {
      return path.split('.').reduce(function (acc, part) {
        return acc && acc[part];
      }, obj);
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var total;
      try {
        if (this.state.hasOwnProperty('data') || this.state.data.hasOwnProperty(this.props.source)) {
          total = 0;

          var source = this.getDescendantProp(this.state.data, this.props.source);

          for (var i in source) {
            total += this.getDescendantProp(source[i], this.props.field);
          }
        }
      } catch (e) {}

      return _react2['default'].createElement(
        'div',
        { className: 'panel-body' },
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          total ? (0, _numeral2['default'])(total).format('0.0b') : 'Unknown'
        )
      );
    }
  }]);

  return BigNumber;
})(_esPanel2['default']);

BigNumber.propTypes = {
  data_path: _react2['default'].PropTypes.string.isRequired,
  source: _react2['default'].PropTypes.string.isRequired,
  field: _react2['default'].PropTypes.string.isRequired
};

BigNumber.defaultProps = {
  elasticsearch_url: 'http://localhost:9200'
};

exports['default'] = BigNumber;
module.exports = exports['default'];