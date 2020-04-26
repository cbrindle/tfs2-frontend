import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/instructionsBG.jpg';
import instructionsText from '../../images/instructions.png';
import village from '../../images/fantasy-village1.jpg';
import controls from '../../images/controls.png';
import combat from '../../images/combat-basics.png';

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

                    <div className={leftSection}>
                        <div className={textLeft}>
                            <p>An unassuming, humble farming town, Swiftfell Village lies nestled among the southern foothills of the Sundirra Realm. Most who reside within the walls of Swiftfell spend their day cultivating the land and selling their crops to merchant caravans passing through towards the capital. At first glance, the quaint hamlet appears as unremarkable as one would assume. However, Swiftfell has been home of the fabled Hero's Academy for hundreds of years. Here, would-be champions of peace are separated from those simply filled with delusions of grandeur.</p>

                            <p>The establishment of the Hero's Academy in such a unremarkable location is no happenstance. Swiftfell is also home to the Aeon Crystal. A mysterious element, whose origin remains unclear to this day, emits an ethereal energy, seeming to repel creatures consumed by dark energy. For generations, the Heroes of Swiftfell have sworn a sacred oath to protect the Aeon Crystal for the good of mankind.</p>

                            <p>As the world grows larger, so have the forces of evil. As a result, Swiftfell Heroes often find themselves sought after by neighboring town governance, and at times by order of the High Crown, to aid in dispelling troops of monsters that plague the realm. This has lead those who seek fortune to apply for admittance into the Hero's Academy. Growing concerns of the traditions of the past being forgotten has lead to rigorous standards that must be met in order to graduate from the Academy.</p>
                        </div>
                        <div className={imageRight}>
                            <img src={village} style={{ width: '90%', borderRadius: '25%' }} alt="Village" />
                        </div>
                    </div>

                    <div className={rightSection}>
                        <div className={imageLeft}>
                            <img src={controls} style={{ width: '90%', marginRight: '20%' }} alt="Controls" />
                        </div>
                        <div className={textRight}>
                            <center><h1><b><u>Controls</u></b></h1></center>
                            <br />
                            <p>Directional Keys: Move your character up, down, left, and right. By default, your character will move at walking speed.</p>

                            <p><b>Z:</b> General action key. Press Z to talk to people, interact with the environment, advance text dialogue, and confirm menu selections.</p>

                            <p><b>X:</b> Cancel or alternate action key. Press X to cancel a menu selection or to pull up the character menu when outside of battle.</p>

                            <p><b>Shift (Hold):</b> Dash. Hold down the Shift key to move at Dash speed. Note that all maps, like the Overworld, do not allow your Hero to dash.</p>

                            <p><b>Mouse Click or Screen Touch:</b> Click, or touch if playing on a mobile device, to move your Hero to the specified location, interact with an NPC or object, or confirm menu selection.</p>
                        </div>
                    </div>

                    <div className={leftSection}>
                        <div className={textLeft}>
                            <center><h1><b><u>Combat Basics</u></b></h1></center>
                            <br />
                            <p><b>Turn-Based Combat:</b> TFS utilizes a turn-based combat system. At the start of a combat turn, you select an action for each of your party members. Once all selections have been made, an agility stat calculation is made to determine the order of actions carried out.</p>

                            <p><b>Attack:</b> Using your Hero's equipped weapon, attack a selected target to deal damage. Classes that have strong Attack ability are Hero and Warrior.</p>

                            <p><b>Guard:</b> Your Hero takes up a defensive posture and guards against any incoming physical attack that round. Typically, the damage your Hero would have taken is reduced by 50%.</p>

                            <p><b>Magic:</b> Select a spell to cast that round. A spell may deal damage, heal a Hero, grant a status buff, or inflict a status aliment on an enemy.</p>

                            <p><b>Special:</b> Every combat action your Hero takes earns him/her Technique Points. Special moves cost various Technique Points and, like spells, can have varying effects depending on the Hero's class.</p>

                            <p><b>Item:</b> Use an item from your inventory in combat. An item may restore a Hero's Hit Points or Magic Points, cure status aliments, or have some other effect.</p>

                            <p><b>Escape:</b> Allows your party to flee battle. This is best to use if your Heroes are running low on HP or if an enemy is too strong.</p>
                        </div>
                        <div className={imageRight}>
                            <img src={combat} style={{ width: '90%', marginLeft: '10%' }} alt="Combat Basics" />
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
const leftSection = css`
    width: 90vw;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 100%;
    margin-bottom: 5vh;
`
const textLeft = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
    font-size: 1.1em;
`
const textRight = css`
    grid-area: 1 / 2 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    font-family: fantasy;
    font-size: 1.1em;
`
const imageLeft = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const imageRight = css`
    grid-area: 1 / 2 / span 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const rightSection = css`
    width: 90vw;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    margin-bottom: 5vh;
`