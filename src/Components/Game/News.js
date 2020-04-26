import React, { Component } from 'react';
import { css } from 'emotion';

export default class News extends Component {
    render() {
        return (
            <div className={main}>
                <div className={newsTop}>
                    <p>Community News</p>
                </div>

                <div className={newsBottom}>
                    <p><b>--- 26 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br /><br />

                    <p><b>--- 25 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br /><br />

                    <p><b>--- 24 April 2020 ---</b></p>
                    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br /><br />
                </div>
            </div>
        )
    }
}

const main = css`
    width: 40vw;
    height: 70vh;
    background-color: rgba(225, 225, 225, 0.5);
    border: 6px double darkblue;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
    overflow-y: scroll;
`
const newsTop = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: fantasy;
    font-weight: bold;
    font-size: 1.5em;
    border-bottom: 2px dotted black;
`
const newsBottom = css`
    grid-area: 2 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    padding: 5% 5% 0 5%;
`