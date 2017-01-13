import React from 'react';
import Health from './health';
import Storage from './storage';
import Documents from './documents';
import IndexList from './index-list';
import TableField from './table-field';
import NodeInfo from './node-info';
import NodeDetail from './node-detail';
import ESStore from './es-store';

class ProxesComponents extends React.Component {
  render() {
    var store = new ESStore();

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Health store={store} pollInterval={this.props.pollInterval} />
          </div>
          <div className="col-md-4">
            <Storage store={store} pollInterval={this.props.pollInterval} />
          </div>
          <div className="col-md-4">
            <Documents store={store} pollInterval={this.props.pollInterval} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <IndexList store={store} pollInterval={this.props.pollInterval} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NodeInfo store={store} pollInterval={this.props.pollInterval} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NodeDetail store={store} pollInterval={this.props.pollInterval} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProxesComponents;
export { React, Health, Storage, Documents, IndexList, ESStore };
