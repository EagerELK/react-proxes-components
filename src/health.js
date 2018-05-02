import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './big-number';

class Health extends BigNumber {
  loadData() {
    super.loadData();
    switch (this.state.data.status) {
      case 'green':
        this.setState({ panel_type: 'green' });
        break;
      case 'yellow':
        this.setState({ panel_type: 'yellow' });
        break;
      case 'red':
        this.setState({ panel_type: 'red' });
        break;
    }
  }

  getValue() {
    return this.state.data.status;
  }

  getSecondary() {
    switch (this.state.data.status) {
      case 'green':
        return "That's good!";
        break;
      case 'yellow':
        return 'Not bad, but not good either.';
        break;
      case 'red':
        return 'Not good!';
        break;
    }
  }
}

Health.propTypes = {
  elasticsearch_url: PropTypes.string,
  data_path: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  panel_type: PropTypes.string,
}

Health.defaultProps = {
  elasticsearch_url: 'http://localhost:9200',
  data_path: '/_cluster/health',
  source: 'status',
  title: 'Health',
  icon: 'fa-heart',
  panel_type: 'default',
};

export default Health;
