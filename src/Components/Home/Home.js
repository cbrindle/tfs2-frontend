import React, { Component } from 'react';
import { css } from 'emotion';
import Nav from '../../Components/Nav/Nav';
import bgImage from '../../images/homeBG.jpg';
import bgImage2 from '../../images/dragon-battle.jpg';
import bgImage3 from '../../images/hero-sec4.jpg';

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
                        <p>An ancient and mysterious evil arises, forcing the Heroes of Swiftfell to once again defend the realm of Sundirra...</p>
                        <p>... the Aeon Crystal, an ethereal relic beset on the side of light, has fallen into darkness...</p>
                        <p>... a world now engulfed in despair cries out for a savior... will you answer?</p>
                    </div>

                    <div className={dragonSection}>
                        {/* BLANK */}
                    </div>

                    <div className={cardSection}>

                    </div>

                    <div className={battleSection}>

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
    height: 75vh;
    width: 100vw;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
    font-family: fantasy;
`
const dragonSection = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${bgImage2}');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const cardSection = css`
    height: 75vh;
    width: 100vw;
`
const battleSection = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${bgImage3}');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const signUpSection = css`
    height: 93vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
`