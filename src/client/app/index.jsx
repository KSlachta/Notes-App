import React from 'react'
import ReactDOM from 'react-dom'

import AwesomeComponent from './AwesomeComponent.jsx'

var body = {
  paddingBottom: '500px',
  backgroundColor: '#66CCFF',
  fontFamily: 'sans-serif'
}

var title = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '100px'
}

const App = () => {
  return (
    <div style={body}>
      <h1 style={title}> My Todo List!</h1>
      <AwesomeComponent />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
