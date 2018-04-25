import React from 'react';
import ReactDOM from 'react-dom';
import ProxesComponents from 'react-proxes-components';

class App extends React.Component {
  render () {
    return (
      <div>
        <ProxesComponents pollInterval="30" />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
