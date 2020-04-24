import React, { Component } from 'react';
import { css } from 'emotion';
import Nav from '../../Components/Nav/Nav';

export default class Home extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    MAIN
                </div>
            </>
        )
    }
}

const main = css`
    height: 90vh;
    width: 100vw;
    overflow-y: scroll;
`