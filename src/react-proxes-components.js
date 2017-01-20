import React from 'react';
import Health from './health';
import Storage from './storage';
import Documents from './documents';
import IndexList from './index-list';
import NodeInfo from './node-info';
import NodeDetail from './node-detail';
import ESStore from './es-store';
import TableColumn from './table-column';

class ProxesComponents extends React.Component {
  render() {
    var store = new ESStore();

    return (
      <div>

        <div className="row">
          <div className="col-md-4">
            <Health store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <Storage store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <Documents store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <IndexList store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NodeInfo store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url} >
              <TableColumn name="Name" source="name" />
              <TableColumn name="Host" source="host" />
              <TableColumn name="Version" source="version" />
              <TableColumn name="OS Name" source="os.name" />
              <TableColumn name="Java Version" source="jvm.version" />
            </NodeInfo>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NodeDetail store={store} pollInterval={this.props.pollInterval} elasticsearch_url={this.props.elasticsearch_url}>
              <TableColumn name="Name" source="name" />
              <TableColumn name="indices.docs.count" source="indices.docs.count" />
              <TableColumn name="indices.store.size_in_bytes" source="indices.store.size_in_bytes" format="size" />
            </NodeDetail>
          </div>
        </div>

      </div>
    );
  }
}

export default ProxesComponents;
export { React, Health, Storage, Documents, IndexList, ESStore, TableColumn, NodeInfo, NodeDetail };
