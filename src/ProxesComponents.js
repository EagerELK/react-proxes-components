import React from 'react';
import Health from './health';
import Storage from './storage';
import Documents from './documents';
import IndexList from './index-list';
import ESStore from './es-store';

class ProxesComponents extends React.Component {
  render() {
    var store = new ESStore();

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Health store={store}/>
          </div>
          <div className="col-md-4">
            <Storage store={store}/>
          </div>
          <div className="col-md-4">
            <Documents store={store} pollInterval="30000"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <IndexList store={store}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProxesComponents;
