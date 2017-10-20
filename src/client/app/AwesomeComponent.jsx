import React from 'react'
import TodoItems from './TodoItems.jsx'

export default class AwesomeComponent extends React.Component {
  state = { items: [] }

  addItem = e => {
    if (this.item.value !== '' && this.item.value !== undefined) {
      const newItems = [
        ...this.state.items,
        { text: this.item.value, key: Date.now() }
      ]

      this.setState({
        items: newItems
      })

      this.item.value = ''
    }
    e.preventDefault()
  }

  render() {
    var input = {
      padding: '10px',
      fontSize: '16px',
      border: '2px solid #FFF'
    }
    var button = {
      padding: '10px',
      fontSize: '16px',
      margin: '10px',
      backgroundColor: '#0066FF',
      color: '#FFF',
      border: '2px solid #0066FF'
    }

    return (
      <div style={{ paddingLeft: '50px' }}>
        <div>
          <form onSubmit={this.addItem}>
            <input
              ref={item => {
                this.item = item
              }}
              placeholder="write text"
              style={input}
            />
            <button style={button} type="submit">
              Click me ;)
            </button>
          </form>
        </div>
        Items: <span>{this.state.items.length}</span>
        <TodoItems entries={this.state.items} />
      </div>
    )
  }
}
