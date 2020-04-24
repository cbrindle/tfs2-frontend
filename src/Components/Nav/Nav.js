import React, { Component } from 'react';
import { css } from 'emotion';

export default class Nav extends Component {
    render() {
        return (
            <div className={main}>
                NAV BAR
            </div>
        )
    }
}

const main = css`
    height: 10vh;
    width: 100vw;
`