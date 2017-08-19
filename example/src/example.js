import React from 'react';
import ReactDOM from 'react-dom';
import ProxesComponents from 'react-proxes-components';

var App = React.createClass({
  render () {
    return (
      <div>
        <ProxesComponents pollInterval="30000" />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
