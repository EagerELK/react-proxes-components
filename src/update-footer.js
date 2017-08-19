import React from 'react';
import TimeAgo from './timeAgo';

class UpdateFooter extends React.Component {
  render() {
    var tzoffset = this.props.lastUpdated.getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(this.props.lastUpdated - tzoffset)).toISOString().slice(0,-1);
    return (
      <div>
        <a href="#" onClick={this.props.updateCallback}>
          <i className="fa fa-refresh"></i>
        </a> <span title={localISOTime}>
          Updated {TimeAgo(this.props.lastUpdated)}
        </span>
      </div>
    );
  }
};

export default UpdateFooter;
