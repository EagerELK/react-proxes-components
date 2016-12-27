import React from 'react';
import ESPanel from './es-panel';
import numeral from 'numeral';

class Documents extends ESPanel {
  constructor(props) {
    super(props);
  }

  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-files-o';
    return (
      <h4><i className={icon}></i> Documents</h4>
    );
  }

  getBody() {
    var documents;
    try {
      documents = this.state.data._all.total.docs.count;
    } catch(e) { }

    return (
      <div className="panel-body">
        <p className="lead">{documents ? numeral(documents).format('0,0') : 'Unknown'}</p>
      </div>
    );
  }
}

Documents.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_stats'
};

export default Documents;
