import React from 'react';
import ESPanel from './es-panel';

class Health extends ESPanel {
  constructor(props) {
    super(props);
  }

  getHeading() {
    var icon = this.state.data.status == 'unknown' ? 'fa fa-question' : 'fa fa-heart';
    return (
      <h4><i className={icon}></i> Health</h4>
    );
  }

  getBody() {
    var health;
    try {
      health = this.state.data.status;
    } catch(e) { }

    return (
      <div className="panel-body">
        <p className="lead">{health ? health : 'Unknown'}</p>
      </div>
    );
  }
}

Health.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/health'
};

export default Health;
