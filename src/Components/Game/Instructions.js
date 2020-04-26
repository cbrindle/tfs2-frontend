import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/instructionsBG.jpg';
import instructionsText from '../../images/instructions.png';

class Instructions extends Component {

    homeRedirect = () => {
        this.props.history.push('/home');
    }
    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div className={titleSection}>
                        <img src={instructionsText} alt="Instructions" />
                        <p>Tales from Swiftfell is a fantasy role-playing game built in the style of a classic 16bit console video game. TFS uses the latest RPG Maker MV software, a development tool which utilizes Javascript that is simple enough for a child, but powerful enough for a developer. TFS is designed to run directly from your web browser, meaning no downloads, no installations, just adventure!</p>
                    </div>

                    <div className={welcomeSection}>
                        <div className={welcomeLeft}>
                            <p>An unassuming, humble farming town, Swiftfell Village lies nestled among the southern foothills of the Sundirra Realm. Most who reside within the walls of Swiftfell spend their day cultivating the land and selling their crops to merchant caravans passing through towards the capital. At first glance, the quaint hamlet appears as unremarkable as one would assume. However, Swiftfell has been home of the fabled Hero's Academy for hundreds of years. Here, would-be champions of peace are separated from those simply filled with delusions of grandeur.</p>

                            <p>The establishment of the Hero's Academy in such a unremarkable location is no happenstance. Swiftfell is also home to the Aeon Crystal. A mysterious element, whose origin remains unclear to this day, emits an ethereal energy, seeming to repel creatures consumed by dark energy. For generations, the Heroes of Swiftfell have sworn a sacred oath to protect the Aeon Crystal for the good of mankind.</p>

                            <p>As the world grows larger, so have the forces of evil. As a result, Swiftfell Heroes often find themselves sought after by neighboring town governance, and at times by order of the High Crown, to aid in dispelling troops of monsters that plague the realm. This has lead those who seek fortune to apply for admittance into the Hero's Academy. Growing concerns of the traditions of the past being forgotten has lead to rigorous standards that must be met in order to graduate from the Academy.</p>
                        </div>
                        <div className={welcomeRight}>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Instructions)



const main = css`
    height: 93vh;
    width: 100vw;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('${bgImage}');
    background-size: 100% 100%;
`
const titleSection = css`
    margin-top: 5vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    font-family: fantasy;
    text-align: center;
    font-weight: bold;
`
const welcomeSection = css`
    width: 90vw;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 100%;
`
const welcomeLeft = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
`
const welcomeRight = css`
    grid-area: 1 / 2 / span 1 / span 1;
    align-items: center;
    justify-content: center;
`