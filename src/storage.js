import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';

class Storage extends ESPanel {
  constructor(props) {
    super(props);
  }

  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-folder';
    return (
      <h4><i className={icon}></i> Storage</h4>
    );
  }

  getBody() {
    var storage;
    try {
      storage = this.state.data._all.total.store.size_in_bytes;
    } catch(e) { }

    return (
      <div className="panel-body">
        <p className="lead">{storage ? numeral(storage).format('0.0b') : 'Unknown'}</p>
      </div>
    );
  }
}

Storage.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

export default Storage;
