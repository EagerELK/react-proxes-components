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

var _health = require('./health');

var _health2 = _interopRequireDefault(_health);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

var _documents = require('./documents');

var _documents2 = _interopRequireDefault(_documents);

var _indexList = require('./index-list');

var _indexList2 = _interopRequireDefault(_indexList);

var _esStore = require('./es-store');

var _esStore2 = _interopRequireDefault(_esStore);

var ProxesComponents = (function (_React$Component) {
  _inherits(ProxesComponents, _React$Component);

  function ProxesComponents() {
    _classCallCheck(this, ProxesComponents);

    _get(Object.getPrototypeOf(ProxesComponents.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProxesComponents, [{
    key: 'render',
    value: function render() {
      var store = new _esStore2['default']();

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_health2['default'], { store: store, pollInterval: this.props.pollInterval })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_storage2['default'], { store: store, pollInterval: this.props.pollInterval })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_documents2['default'], { store: store, pollInterval: this.props.pollInterval })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-12' },
            _react2['default'].createElement(_indexList2['default'], { store: store, pollInterval: this.props.pollInterval })
          )
        )
      );
    }
  }]);

  return ProxesComponents;
})(_react2['default'].Component);

exports['default'] = ProxesComponents;
exports.React = _react2['default'];
exports.Health = _health2['default'];
exports.Storage = _storage2['default'];
exports.Documents = _documents2['default'];
exports.IndexList = _indexList2['default'];
exports.ESStore = _esStore2['default'];