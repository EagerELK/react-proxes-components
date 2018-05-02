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

var _bigNumber = require('./big-number');

var _bigNumber2 = _interopRequireDefault(_bigNumber);

var Health = (function (_BigNumber) {
  _inherits(Health, _BigNumber);

  function Health() {
    _classCallCheck(this, Health);

    _get(Object.getPrototypeOf(Health.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Health, [{
    key: 'loadData',
    value: function loadData() {
      _get(Object.getPrototypeOf(Health.prototype), 'loadData', this).call(this);
      switch (this.state.data.status) {
        case 'green':
          this.setState({ panel_type: 'green' });
          break;
        case 'yellow':
          this.setState({ panel_type: 'yellow' });
          break;
        case 'red':
          this.setState({ panel_type: 'red' });
          break;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.data.status;
    }
  }, {
    key: 'getSecondary',
    value: function getSecondary() {
      switch (this.state.data.status) {
        case 'green':
          return "That's good!";
          break;
        case 'yellow':
          return 'Not bad, but not good either.';
          break;
        case 'red':
          return 'Not good!';
          break;
      }
    }
  }]);

  return Health;
})(_bigNumber2['default']);

Health.propTypes = {
  elasticsearch_url: _propTypes2['default'].string,
  data_path: _propTypes2['default'].string,
  source: _propTypes2['default'].string,
  title: _propTypes2['default'].string,
  icon: _propTypes2['default'].string,
  panel_type: _propTypes2['default'].string
};

Health.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/health',
  source: 'status',
  title: 'Health',
  icon: 'fa-heart',
  panel_type: 'default'
};

exports['default'] = Health;
module.exports = exports['default'];