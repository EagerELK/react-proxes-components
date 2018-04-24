import React from 'react';
import UpdateFooter from './update-footer';
import ESStore from './es-store';

class ESPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      last_updated: new Date()
    };

    if (typeof this.props.store == 'undefined') {
      this.props.store = new ESStore();
    }

    this.refresh = this.refresh.bind(this);
  }

  refreshLastUpdated() {
    this.setState(this.state);
  }

  componentDidMount() {
    this.loadData();
    // Refresh the state so that the Last Updated shows accurately
    setInterval(this.refreshLastUpdated.bind(this), 10 * 1000);
    // Refresh the data we cached
    if (this.props.pollInterval) {
        setInterval(this.refresh, this.props.pollInterval);
    }
  }

  loadData() {
    this.props.store.get(
      this.props.elasticsearch_url + this.props.data_path,
      function (response) {
        this.setState({
          data: response.data,
          last_updated: new Date()
        });
      }.bind(this)
    );
  }

  refresh(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.store.remove(this.props.elasticsearch_url + this.props.data_path);
    this.loadData();
  }

  getHeading() {
    return (
      <h4><i className="fa fa-question"></i> Heading</h4>
    );
  }

  getBody() {
    return (
      <p className="lead">Body</p>
    );
  }

  getFooter() {
    return (
      <UpdateFooter lastUpdated={this.state.last_updated} updateCallback={this.refresh} />
    );
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          {this.getHeading()}
        </div>
        {this.getBody()}
        <div className="panel-footer">
          {this.getFooter()}
        </div>
      </div>
    );
  }
}

ESPanel.defaultProps = {
  elasticsearch_url: 'http://localhost:9200'
};

export default ESPanel;
