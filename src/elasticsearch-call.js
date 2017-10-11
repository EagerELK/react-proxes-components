import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ElasticsearchCall extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios({
      method: this.props.method,
      url: this.props.endpoint,
      data: this.props.data
    }).then(this.handleResponse.bind(this));
  }

  handleResponse(response) {
    if (this.props.destination) {
      document.getElementById(this.props.destination).innerHTML = JSON.stringify(response.data, null, ' ');
    } else if (this.props.handler) {
      this.props.handler(response);
    }
  }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.handleClick}>
          {this.props.action}
        </button>
      </div>
    )
  }
}

ElasticsearchCall.propTypes = {
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['get', 'post', 'put', 'delete']).isRequired,
  endpoint: PropTypes.string.isRequired,
};
ElasticsearchCall.defaultProps = {
  method: 'get'
};

export default ElasticsearchCall;
