import React from 'react';
import Health from './health';
import Storage from './storage';
import Documents from './documents';
import Nodes from './nodes';
import IndexList from './index-list';
import ShardList from './shard-list';
import NodeInfo from './node-info';
import NodeDetail from './node-detail';
import ESStore from './es-store';
import ESTable from './es-table';
import UpdateFooter from './update-footer';
import TableColumn from './table-column';
import BigNumber from './big-number';
import ClusterAvailableSpace from './cluster-available-space';
import ClusterMemory from './cluster-memory';
import OSMemory from './os-memory';
import IndexingRate from './indexing-rate';
import ElasticsearchCall from './elasticsearch-call';

class ProxesComponents extends React.Component {
  render() {
    var store = new ESStore(this.props.pollInterval);

    return (
      <div>

        <div className="row">
          <div className="col-md-4">
            <Health store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <Storage store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <Documents store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Nodes store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <ClusterMemory store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
          <div className="col-md-4">
            <OSMemory store={store} elasticsearch_url={this.props.elasticsearch_url} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <NodeInfo store={store} elasticsearch_url={this.props.elasticsearch_url} >
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
            <NodeDetail store={store} elasticsearch_url={this.props.elasticsearch_url}>
              <TableColumn name="Name" source="name" />
              <TableColumn name="Documents" source="indices.docs.count" format="number" />
              <TableColumn name="Segments" source="indices.segments.count" format="number" />
              <TableColumn name="Storage" source="indices.store.size_in_bytes" format="size" />
              <TableColumn name="Storage Available" source="fs.total.free_in_bytes" format="size" />
              <TableColumn name="Memory Available" source="os.mem.free_in_bytes" format="size" />
              <TableColumn name="Heap Size" source="jvm.mem.heap_max_in_bytes" format="size" />
            </NodeDetail>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <IndexList store={store} elasticsearch_url={this.props.elasticsearch_url}>
              <TableColumn name="Name" source="name"/>
              <TableColumn name="Documents" source="primaries.docs.count" format="number"/>
              <TableColumn name="Size" source="primaries.store.size_in_bytes" format="size"/>
              <TableColumn name="Segments" source="primaries.segments.count" format="number"/>
            </IndexList>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ShardList store={store} elasticsearch_url={this.props.elasticsearch_url}>
              <TableColumn name="Index" source="index"/>
              <TableColumn name="Node" source="node"/>
              <TableColumn name="State" source="state"/>
              <TableColumn name="Primary" source="prirep_label"/>
            </ShardList>
          </div>
        </div>
      </div>
    );
  }
}

export default ProxesComponents;
export {
  React,
  Health,
  Storage,
  Documents,
  IndexList,
  ESStore,
  ESTable,
  UpdateFooter,
  TableColumn,
  NodeInfo,
  NodeDetail,
  ClusterAvailableSpace,
  ClusterMemory,
  OSMemory,
  ElasticsearchCall
};
