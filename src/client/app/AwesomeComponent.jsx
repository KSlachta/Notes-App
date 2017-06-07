import React from 'react';

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
}
