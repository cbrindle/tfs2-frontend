import React, { Component } from 'react';
import { css } from 'emotion';
import Nav from '../../Components/Nav/Nav';
import bgImage from '../../images/homeBG.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    <div className={titleSection}>
                        {/* BLANK */}
                    </div>

                    <div className={descriptionSection}>
                        Scroll
                    </div>

                    <div className={test}>
                        TEST
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
    align-items: center;
    justify-content: center;
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
const test = css`
    height: 93vh;
    width: 100vw;
    background-color: gray;
`