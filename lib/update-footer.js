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

var _timeAgo = require('./timeAgo');

var _timeAgo2 = _interopRequireDefault(_timeAgo);

var UpdateFooter = (function (_React$Component) {
  _inherits(UpdateFooter, _React$Component);

  function UpdateFooter() {
    _classCallCheck(this, UpdateFooter);

    _get(Object.getPrototypeOf(UpdateFooter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(UpdateFooter, [{
    key: 'render',
    value: function render() {
      var tzoffset = this.props.lastUpdated.getTimezoneOffset() * 60000; //offset in milliseconds
      var localISOTime = new Date(this.props.lastUpdated - tzoffset).toISOString().slice(0, -1);
      return _react2['default'].createElement(
        'div',
        { className: 'panel-footer' },
        _react2['default'].createElement(
          'a',
          { href: '#', onClick: this.props.updateCallback },
          _react2['default'].createElement('i', { className: 'fa fa-refresh' })
        ),
        ' ',
        _react2['default'].createElement(
          'span',
          { title: localISOTime },
          'Updated ',
          (0, _timeAgo2['default'])(this.props.lastUpdated)
        )
      );
    }
  }]);

  return UpdateFooter;
})(_react2['default'].Component);

;

exports['default'] = UpdateFooter;
module.exports = exports['default'];