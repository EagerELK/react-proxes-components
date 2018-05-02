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

var _updateFooter = require('./update-footer');

var _updateFooter2 = _interopRequireDefault(_updateFooter);

var _esStore = require('./es-store');

var _esStore2 = _interopRequireDefault(_esStore);

var ESPanel = (function (_React$Component) {
  _inherits(ESPanel, _React$Component);

  function ESPanel(props) {
    _classCallCheck(this, ESPanel);

    _get(Object.getPrototypeOf(ESPanel.prototype), 'constructor', this).call(this, props);

    this.state = {
      data: {},
      last_updated: new Date()
    };

    if (typeof this.props.store == 'undefined') {
      this.props.store = new _esStore2['default']();
    }

    this.refresh = this.refresh.bind(this);
  }

  _createClass(ESPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
      // Refresh the state so that the Last Updated shows accurately
      setInterval(this.refresh.bind(this), 10 * 1000);
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var hit = this.props.store.get(this.props.elasticsearch_url + this.props.data_path, (function (response) {
        this.setState({
          data: response.data
        });
      }).bind(this));
      if (hit == false) {
        this.setState({ last_updated: new Date() });
      }
    }
  }, {
    key: 'refresh',
    value: function refresh(e) {
      if (e) {
        e.preventDefault();
      }

      this.props.store.remove(this.props.elasticsearch_url + this.props.data_path);
      this.loadData();

      this.setState(this.state);
    }
  }, {
    key: 'getHeading',
    value: function getHeading() {
      return _react2['default'].createElement(
        'div',
        { className: 'row' },
        _react2['default'].createElement(
          'div',
          { className: 'col-xs-3' },
          _react2['default'].createElement('i', { className: this.props.icon + " fa fa-5x" })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'col-xs-9 text-right' },
          _react2['default'].createElement(
            'h2',
            null,
            this.props.title
          )
        )
      );
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      return _react2['default'].createElement(
        'p',
        { className: 'lead' },
        'Body'
      );
    }
  }, {
    key: 'getFooter',
    value: function getFooter() {
      return _react2['default'].createElement(_updateFooter2['default'], { lastUpdated: this.state.last_updated, updateCallback: this.refresh });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: "panel panel-" + (this.state.panel_type ? this.state.panel_type : this.props.panel_type) },
        _react2['default'].createElement(
          'div',
          { className: 'panel-heading' },
          this.getHeading()
        ),
        this.getBody(),
        _react2['default'].createElement(
          'div',
          { className: 'panel-footer' },
          this.getFooter()
        )
      );
    }
  }]);

  return ESPanel;
})(_react2['default'].Component);

ESPanel.propTypes = {
  elasticsearch_url: _propTypes2['default'].string,
  panel_type: _propTypes2['default'].string,
  icon: _propTypes2['default'].string
};

ESPanel.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  panel_type: 'default',
  icon: 'fa-question'
};

exports['default'] = ESPanel;
module.exports = exports['default'];