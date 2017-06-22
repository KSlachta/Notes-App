import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    var title = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }

    return (
      <div>
        <h1 style={title}> My Todo List!</h1>
        <AwesomeComponent />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
