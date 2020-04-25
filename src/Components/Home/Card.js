import React, { Component } from 'react';
import { css } from 'emotion';

export default class Card extends Component {
    render() {
        return (
            <div className={main}>
                <div className={imgSection}>
                    <img src={this.props.cardImg} className={imgStyle} alt={this.props.altText} />
                </div>

                <div className={textSection}>
                    <p>{this.props.textDes}</p>
                </div>
            </div>
        )
    }
}

const main = css`
    height: 60vh;
    width: 25vw;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
`
const imgSection = css`
    grid-area: 1 / 1 / span 1 / span 1;
`
const textSection = css`
    grid-area: 2 / 1 / span 1 / span 1;
    display: flex;
    font-family: fantasy;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 5% 0 5%;
    background-image: linear-gradient(to right, tan, rgba(255, 255, 255, 0.7));
    border-radius: 0 0 0 5px;
    font-weight: bold;
`
const imgStyle = css`
    height: 100%;
    width: 100%;
    border-radius: 5px 0 0 0;
`