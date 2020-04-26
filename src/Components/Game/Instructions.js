import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import bgImage from '../../images/instructionsBG.jpg';
import instructionsText from '../../images/instructions.png';
import village from '../../images/fantasy-village1.jpg';
import controls from '../../images/controls.png';
import combat from '../../images/combat-basics.png';
import heroFace from '../../images/hero-face.png';
import sherylFace from '../../images/sheryl-face.png';
import jagerFace from '../../images/jager-face.png';
import galeFace from '../../images/gale-face.png';
import jannaFace from '../../images/janna-face.png';
import meganFace from '../../images/megan-face.png';
import masterFace from '../../images/master-face.png';
import sorenFace from '../../images/soren-face.png';

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

                    {/* Brindle */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={heroFace} style={{ width: '80%' }} alt="Hero Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Brindle</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Ambitious, brave, and a bit forgetful, Brindle has spent most of his life preparing to earn the title of Hero from the Swiftfell Hero's Academy. He is in his last year and is preparing to take the Hero's Exam any day now. Son of the legendary Hero, Agin, enjoys slaying monsters and the idea of adventuring across the world more than protecting the people of Sundirra Realm.</p>

                            <ul>
                                <li>Class: Hero</li>
                                <li>Weapon Type: Short Swords</li>
                                <li>Magic: Support-based</li>
                                <li>Special: Ki-based</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sheryl */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={sherylFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Sheryl</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Head-strong, courageous, and quick to anger, Sheryl, too, is in her final year at the Hero's Academy. A roaming band of monsters killed her parents at a young age. She vowed that no one else should have to endure the pain she did, prompting Sheryl to seek training under famed Hero, Master. While not adept at spell casting, Sheryl's raw power and battle-rage techniques more than make up for her lack of affinity with the spiritual realm.</p>

                            <ul>
                                <li>Class: Warrior</li>
                                <li>Weapon Type: Broad Swords</li>
                                <li>Magic: None</li>
                                <li>Special: Berserker/Damage-based</li>
                            </ul>
                        </div>
                    </div>

                    {/* Jager */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={jagerFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Jager</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Reserved, driven, and stoic, Jager serves as the head Monk at the Marfia Monastery. Plagued by a long-standing feelings of disconnection with others, Jager moved to Marfia one year ago after failing his Hero's Exam. He was understandably devastated with his shortcomings, but has always had a connection to nature and its creatures, in which he finds comfort when feeling down.</p>

                            <ul>
                                <li>Class: Priest</li>
                                <li>Weapon Type: Crossbows</li>
                                <li>Magic: Status-based</li>
                                <li>Special: Chaos-based</li>
                            </ul>
                        </div>
                    </div>

                    {/* Gale */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={galeFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Gale</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Cheerful, helpful, and a bit too naive for her own good, Gale lives at the Marfia Monastery with her twin brother, Jager. Like her brother, Gale failed her Hero's Exam one year ago and decided to move on with her life beyond training to become a Hero. She now utilizes her skills in the healing arts, which were cultivated at the Hero's Academy, to aid the people of her new home.</p>

                            <ul>
                                <li>Class: Mage</li>
                                <li>Weapon Type: Canes</li>
                                <li>Magic: Healing-based</li>
                                <li>Special: Element-based</li>
                            </ul>
                        </div>
                    </div>

                    {/* Janna */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={jannaFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Janna</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Caring, supportive, and quick-witted, Janna has been raising her children Brindle and Megan on her own since the passing of her late husband, Agin. In the quiet moments late into the night, she'll often feel the pains of sadness at her loss, but they quickly pass as she spends her time perfecting the next best recipe. At times, she wishes Brindle would find a different path than that of Hero training, but she is too proud of him to pay it any mind.</p>

                            <ul>
                                <li>Occupation: Homemaker</li>
                                <li>Hobbies: Knitting and gardening</li>
                                <li>Noted For: Voted best cook in Swiftfell Village three-years running</li>
                                <li>"A house is made from wood and beams. A home is made from love and dreams."</li>
                            </ul>
                        </div>
                    </div>

                    {/* Megan */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={meganFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Megan</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Bright-eyed, pleasant, and good-hearted, Megan plays the typically "little sister" to Brindle. Always wanting to tag along, but never quite big enough, Megan supports the students at the Hero's Academy with baked treats made in tandem with Janna. Her love for animals leads her to care for sick and injured livestock and woodland creatures found in, and around, Swiftfell Village.</p>

                            <ul>
                                <li>Occupation: None</li>
                                <li>Hobbies: Aiding injured farm animals and pets</li>
                                <li>Noted For: Acting as a "big sister" to all the small children of Swiftfell Village</li>
                                <li>"Just leave it to me!"</li>
                            </ul>
                        </div>
                    </div>

                    {/* Master */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={masterFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Master</p>
                        </div>
                        <div className={charDesSec}>
                            <p>Battle-hardened, salty, and wise, Master resides as the head instructor at the Hero's Academy in Swiftfell Village. Master has carried the title of Hero for many years, slaying countless monsters and upholding the sacred oath of protecting the Aeon Crystal. Only spoken in whispered rumors, Master is said to blame himself for Agin's death, resulting in his resignation, and subsequent appointment, at the Hero Academy.</p>

                            <ul>
                                <li>Occupation: Head Instructor at the Swiftfell Hero's Academy</li>
                                <li>Hobbies: Maintaining the documentation of the history of Swiftfell as local historian</li>
                                <li>Noted For: Trained alongside Agin at the Hero's Academy</li>
                                <li>"Amateurs train until they get it right. Heroes train until they can't get it wrong."</li>
                            </ul>
                        </div>
                    </div>

                    {/* Soren */}
                    <div className={charContainer}>
                        <div className={charImageSec}>
                            <img src={sorenFace} style={{ width: '80%' }} alt="Sheryl Character" />
                        </div>
                        <div className={charNameSec}>
                            <p>Soren</p>
                        </div>
                        <div className={charDesSec}>
                            <p>??????</p>

                            <ul>
                                <li>Occupation: ???</li>
                                <li>Hobbies: ???</li>
                                <li>Noted For: ???</li>
                                <li>"Power is the only constant in this world."</li>
                            </ul>
                        </div>
                    </div>

                    <Link to="/game">Back to Game Menu</Link>
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
    margin-bottom: 8vh;
`
const rightSection = css`
    width: 90vw;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
    margin-bottom: 8vh;
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
const charContainer = css`
    width: 70vw;
    height: 45vh;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 15% 85%;
    margin-bottom: 5vh;
`
const charImageSec = css`
    grid-area: 1 / 1 / span 2 / span 1;

`
const charNameSec = css`
    grid-area: 1 / 2 / span 1 / span 1;
    font-family: fantasy;
    font-weight: bold;
    font-size: 1.5em;
    display: flex;
    align-items: center;
`
const charDesSec = css`
    grid-area: 2 / 2 / span 1 / span 1;
    font-family: fantasy;
`