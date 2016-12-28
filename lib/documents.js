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

var Documents = (function (_ESPanel) {
  _inherits(Documents, _ESPanel);

  function Documents(props) {
    _classCallCheck(this, Documents);

    _get(Object.getPrototypeOf(Documents.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Documents, [{
    key: 'getHeading',
    value: function getHeading() {
      var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-files-o';
      return _react2['default'].createElement(
        'h4',
        null,
        _react2['default'].createElement('i', { className: icon }),
        ' Documents'
      );
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var documents;
      try {
        documents = this.state.data._all.total.docs.count;
      } catch (e) {}

      return _react2['default'].createElement(
        'div',
        { className: 'panel-body' },
        _react2['default'].createElement(
          'p',
          { className: 'lead' },
          documents ? (0, _numeral2['default'])(documents).format('0,0') : 'Unknown'
        )
      );
    }
  }]);

  return Documents;
})(_esPanel2['default']);

Documents.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

exports['default'] = Documents;
module.exports = exports['default'];