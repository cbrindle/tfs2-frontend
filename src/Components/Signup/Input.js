import React, { Component } from 'react';
import { css } from 'emotion';

export default class Input extends Component {
    render() {
        return (
            <div style={{ margin: '3vh 0 3vh 0' }}>
                <input type={this.props.inputType} id={this.props.inputID} name={this.props.inputName} onChange={this.props.inputChange} className={main} placeholder={this.props.inputPlaceholder}></input>
            </div>
        )
    }
}

const main = css`
    width: 20vw;
    height: 4vh;
    border-radius: 1px solid gray;
    border-radius: 5px;
    font-family: fantasy;
    font-size: 0.9em;
    padding-left: 1vw;
    display: flex;
    align-items: center;
`