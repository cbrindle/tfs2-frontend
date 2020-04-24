import React, { Component } from 'react';
import { css } from 'emotion';
import Nav from '../../Components/Nav/Nav';
import bgImage from '../../images/Home/testBG.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    <div className={titleSection}>
                        TEST
                    </div>

                    <div className={descriptionSection}>
                        Scroll
                    </div>
                </div>
            </>
        )
    }
}

const main = css`
    height: 93vh;
    width: 100vw;
    overflow-y: scroll;
`
const titleSection = css`
    height: 93vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: url('${bgImage}');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const descriptionSection = css`
    height: 50vh;
    width: 100vw;
    background-color: red;
`