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

var _nodeInfo = require('./node-info');

var _nodeInfo2 = _interopRequireDefault(_nodeInfo);

var _nodeDetail = require('./node-detail');

var _nodeDetail2 = _interopRequireDefault(_nodeDetail);

var _esStore = require('./es-store');

var _esStore2 = _interopRequireDefault(_esStore);

var _esTable = require('./es-table');

var _esTable2 = _interopRequireDefault(_esTable);

var _updateFooter = require('./update-footer');

var _updateFooter2 = _interopRequireDefault(_updateFooter);

var _tableColumn = require('./table-column');

var _tableColumn2 = _interopRequireDefault(_tableColumn);

var _bigNumber = require('./big-number');

var _bigNumber2 = _interopRequireDefault(_bigNumber);

var _clusterAvailableSpace = require('./cluster-available-space');

var _clusterAvailableSpace2 = _interopRequireDefault(_clusterAvailableSpace);

var _totalClusterMemory = require('./total-cluster-memory');

var _totalClusterMemory2 = _interopRequireDefault(_totalClusterMemory);

var _usedClusterMemory = require('./used-cluster-memory');

var _usedClusterMemory2 = _interopRequireDefault(_usedClusterMemory);

var _totalOsMemory = require('./total-os-memory');

var _totalOsMemory2 = _interopRequireDefault(_totalOsMemory);

var _usedOsMemory = require('./used-os-memory');

var _usedOsMemory2 = _interopRequireDefault(_usedOsMemory);

var _elasticsearchCall = require('./elasticsearch-call');

var _elasticsearchCall2 = _interopRequireDefault(_elasticsearchCall);

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
            _react2['default'].createElement(_health2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_storage2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_documents2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-12' },
            _react2['default'].createElement(
              _indexList2['default'],
              { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url },
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Name', source: 'name' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Documents', source: 'primaries.docs.count', format: 'number' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Size', source: 'primaries.store.size_in_bytes', format: 'size' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Segments', source: 'primaries.segments.count', format: 'number' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-12' },
            _react2['default'].createElement(
              _nodeInfo2['default'],
              { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url },
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Name', source: 'name' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Host', source: 'host' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Version', source: 'version' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'OS Name', source: 'os.name' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Java Version', source: 'jvm.version' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-12' },
            _react2['default'].createElement(
              _nodeDetail2['default'],
              { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url },
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Name', source: 'name' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Documents', source: 'indices.docs.count', format: 'number' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Segments', source: 'indices.segments.count', format: 'number' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Storage', source: 'indices.store.size_in_bytes', format: 'size' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Storage Available', source: 'fs.total.free_in_bytes', format: 'size' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Memory Available', source: 'os.mem.free_in_bytes', format: 'size' }),
              _react2['default'].createElement(_tableColumn2['default'], { name: 'Heap Size', source: 'jvm.mem.heap_max_in_bytes', format: 'size' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_clusterAvailableSpace2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_totalClusterMemory2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_usedClusterMemory2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_totalOsMemory2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'col-md-4' },
            _react2['default'].createElement(_usedOsMemory2['default'], { store: store, pollInterval: this.props.pollInterval, elasticsearch_url: this.props.elasticsearch_url })
          ),
          _react2['default'].createElement('div', { className: 'col-md-4' })
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
exports.ESTable = _esTable2['default'];
exports.UpdateFooter = _updateFooter2['default'];
exports.TableColumn = _tableColumn2['default'];
exports.NodeInfo = _nodeInfo2['default'];
exports.NodeDetail = _nodeDetail2['default'];
exports.ClusterAvailableSpace = _clusterAvailableSpace2['default'];
exports.TotalClusterMemory = _totalClusterMemory2['default'];
exports.UsedClusterMemory = _usedClusterMemory2['default'];
exports.TotalOSMemory = _totalOsMemory2['default'];
exports.UsedOSMemory = _usedOsMemory2['default'];
exports.ElasticsearchCall = _elasticsearchCall2['default'];