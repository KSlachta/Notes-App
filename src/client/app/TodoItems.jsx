import React from 'react'

export default class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var todoEntries = this.props.entries
    var theList = {
      listStyle: 'none',
      paddingLeft: '0',
      width: '255px'
    }
    var listItem = {
      color: '#333',
      backgroundColor: 'rgba(255,255,255,.5)',
      padding: '15px',
      marginBottom: '15px',
      borderRadius: '5px',
    }

    function createTasks (item) {
      return <li key={item.key} style={listItem}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks)

    return(
      <ul style={theList}>
        {listItems}
      </ul>
    )
  }
}
