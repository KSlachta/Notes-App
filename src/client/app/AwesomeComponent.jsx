import React from 'react';

<<<<<<< HEAD
class AwesomeComponent extends React.Component {

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
    return (
      <div>
        <div>
            <input
                type='text'
                ref={(word) => { this.word = word }}
                placeholder={'write text'}
            />
          <button onClick={this.onClick}>Click me ;)</button>

        </div>
        List : <span>{this.state.words.length}</span>
        {this.state.words.map(function(w) {
          return(<div>{w}</div>)
        })}
      </div>
    );
  }

=======
export default class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words: []
        };
    }

    onClick = () => {
        let newWords = [...this.state.words, this.word]
        this.setState({
            words: newWords,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        type='text'
                        ref={(word) => { this.word = word }}
                        placeholder={'write text'}
                    />
                    <button onMouseDown={this.onClick}/>
                </div>

                <div>
                    List : <span>{this.state.newWords.count}</span>
                </div>

                {
                    this.state.words.map((w) => {
                        return(
                            <div>{w}</div>
                        )
                    })
                }
            </div>
        );
    }
>>>>>>> 53f0d9214c695d0ee3dce777113795e1d87487d4
}
