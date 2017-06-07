import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      listCount: 0,
      words: []
    };
  }

  onClick = () => {
    let newListCount = this.state.listCount + 1;
    let newWords = [...this.state.words, this.state.word]
    this.setState({
      listCount: newListCount,
      words: newWords,
      word: ''
    });
  }

  onTextChange = (e) => {
      this.setState({word: e.target.value})
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onClick}>
              <input type='text'
                  id='input'
                  placeholder={'write text'}
                  onChange={this.onTextChange}/>
                <button
                  onMouseDown={this.onClick}
                  id='button'/>
          </form>

        </div>
        List : <span>{this.state.listCount}</span>
        {this.state.words.map(function(w) {
          return(<div>{w}</div>)
        })}
      </div>
    );
  }

}

export default AwesomeComponent;
