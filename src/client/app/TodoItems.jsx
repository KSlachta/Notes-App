import React from 'react'

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
  borderRadius: '5px'
}

const TodoItems = ({ entries }) => {
  return (
    <ul style={theList}>
      {entries.map(item => {
        return (
          <li key={item.key} style={listItem}>
            {item.text}
          </li>
        )
      })}
    </ul>
  )
}

export default TodoItems
