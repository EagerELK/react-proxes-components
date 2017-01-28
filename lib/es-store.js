'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _timeAgo = require('./timeAgo');

var _timeAgo2 = _interopRequireDefault(_timeAgo);

var ESStore = (function () {
  function ESStore() {
    _classCallCheck(this, ESStore);

    this.cache = {};
  }

  _createClass(ESStore, [{
    key: 'remove',
    value: function remove(url) {
      delete this.cache[url];
    }
  }, {
    key: 'get',
    value: function get(url) {
      this.cache[url] = this.cache.hasOwnProperty(url) ? this.cache[url] : _axios2['default'].get(url);
      return this.cache[url];
    }
  }]);

  return ESStore;
})();

exports['default'] = ESStore;
module.exports = exports['default'];