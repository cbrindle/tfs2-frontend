import React, { Component } from 'react';
import { css } from 'emotion';
import Nav from '../../Components/Nav/Nav';
import bgImage from '../../images/homeBG.jpg';
import bgImage2 from '../../images/dragon-battle.jpg';
import bgImage3 from '../../images/hero-sec4.jpg';
import subtleRanger from '../../images/subtle-ranger.png';
import subtleBG from '../../images/subtle-bg.jpg';
import darkForest from '../../images/darkForest.jpg';
import Card from './Card'
import forest from '../../images/forest1.jpg';
import desert from '../../images/desert1.jpg';
import mountains from '../../images/mountains.jpg';

export default class Home extends Component {

    bottomCheck = () => {
        const section = document.querySelector(`#signUp`);
        const check = section.getBoundingClientRect().height + section.getBoundingClientRect().top;
        if (check === window.innerHeight) {
            console.log(`BOTTOM!`);
            document.querySelector(`#battle`).classList.remove('battleFadeIn');
            document.querySelector(`#battle`).classList.add('battleFade');
        } else {
            document.querySelector(`#battle`).classList.remove('battleFade');
            document.querySelector(`#battle`).classList.add('battleFadeIn');
        }
    }


    render() {
        return (
            <>
                <Nav />

                <div className={main} onScroll={this.bottomCheck}>
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
                        <Card
                            cardImg={forest}
                            textDes="Explore enchanted forests that serve as home to an array of mythical creatures, thick groves, and dangerous beasts."
                        />
                        <Card
                            cardImg={desert}
                            textDes="Summon your courage to cross vast and expansive deserts where, rumor has it, a nomadic tribe obsessed with ethereal magic roams the dunes."
                        />
                        <Card
                            cardImg={mountains}
                            textDes="Scale treacherous mountainsides as you discover deep caverns and unlock intriguing puzzles, which guard fabled treasures left behind by an extinct race of mine-dwellers."
                        />
                    </div>

                    <div id="battle" className={battleSection}>
                        {/* BLANK */}
                    </div>

                    <div id="signUp" className={signUpSection}>

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
    background-image: url('${subtleRanger}');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.7em;
    font-family: fantasy;
    text-align: center;
    color: white;
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: url('${subtleBG}');
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
    height: 45vh;
    width: 100vw;
    background-image: linear-gradient(to bottom, rgba(50, 50, 50, 1), rgba(50, 50, 50, 0)), url('${darkForest}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`