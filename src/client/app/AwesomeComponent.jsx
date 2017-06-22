import React from 'react';

export default class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      words: []
    };
  }

  onClick = () => {
    let newWords = [...this.state.words, this.word.value]
    if (this.word.value !== undefined) {
      this.word.value = ''
    }
    this.setState({
      words: newWords
    });
  }

  render() {
    var body = {
        padding: '50px',
        backgroundColor: '#66CCFF',
        fontFamily: 'sans-serif'
    }
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
      <div>
        <div style={body}>
          <input
              type='text'
              ref={(word) => { this.word = word }}
              placeholder={'write text'}
              style={input}
          />
        <button onClick={this.onClick} style={button}>
              {'Click me ;)'}
          </button>

        </div>
        List : <span>{this.state.words.length}</span>
        {this.state.words.map(function(w) {
          return(<div>{w}</div>)
        })}
      </div>
    );
  }
}
