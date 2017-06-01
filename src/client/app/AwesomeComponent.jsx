import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      listCount: 0,
      words: []
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    let newListCount = this.state.listCount + 1;
    let newWords = this.state.words.push('Hello World')
    this.setState({
      listCount: newListCount,
      words: newWords
    });
  }

  render() {
    return (
      <div>
        <div><button onClick={this.onClick}>Click this!</button></div>
        List : <span>{this.state.listCount}</span>
        {this.state.words.map(function(w) {
          return(<div>w</div>)
        })}
      </div>
    );
  }

}

export default AwesomeComponent;
