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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var ElasticsearchCall = (function (_React$Component) {
  _inherits(ElasticsearchCall, _React$Component);

  function ElasticsearchCall(props) {
    _classCallCheck(this, ElasticsearchCall);

    _get(Object.getPrototypeOf(ElasticsearchCall.prototype), 'constructor', this).call(this, props);
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(ElasticsearchCall, [{
    key: 'handleClick',
    value: function handleClick() {
      (0, _axios2['default'])({
        method: this.props.method,
        url: this.props.endpoint,
        data: this.props.data
      }).then(this.handleResponse.bind(this));
    }
  }, {
    key: 'handleResponse',
    value: function handleResponse(response) {
      if (this.props.destination) {
        document.getElementById(this.props.destination).innerHTML = JSON.stringify(response.data, null, ' ');
      } else if (this.props.handler) {
        this.props.handler(response);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'button',
          { className: 'btn btn-default', onClick: this.handleClick },
          this.props.action
        )
      );
    }
  }]);

  return ElasticsearchCall;
})(_react2['default'].Component);

ElasticsearchCall.propTypes = {
  action: _propTypes2['default'].string.isRequired,
  method: _propTypes2['default'].oneOf(['get', 'post', 'put', 'delete']).isRequired,
  endpoint: _propTypes2['default'].string.isRequired
};
ElasticsearchCall.defaultProps = {
  method: 'get'
};

exports['default'] = ElasticsearchCall;
module.exports = exports['default'];