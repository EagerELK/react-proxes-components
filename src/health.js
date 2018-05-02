import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from './big-number';

class Health extends BigNumber {
  dataDidLoad(response) {
    var colour = 'yellow';
    switch (response.data.status) {
      case 'green':
        colour = 'green';
        break;
      case 'yellow':
        colour = 'yellow';
        break;
      case 'red':
        colour = 'red';
        break;
    }
    this.setState({
      data: response.data,
      panel_type: colour,
    });
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
  data_path: '/_cluster/stats',
  source: 'status',
  title: 'Health',
  icon: 'fa-heart',
  panel_type: 'default',
};

export default Health;
