import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import bgImage from '../../images/instructionsBG.jpg';
import menuText from '../../images/game-menu-text.png';
import News from './News';

import { authChecker } from '../../redux/actions/authActions';

class Game extends Component {

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        if (!auth) {
            this.props.history.push('/home');
        }
        await this.props.authChecker(auth);
    }

    homeRedirect = () => {
        this.props.history.push('/home');
    }

    gameLaunch = async () => {
        window.open('https://tfs-chapter1.herokuapp.com/game/launch');
    }

    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div className={menuLeft}>
                        <img src={menuText} alt="Game Menu" />
                        <span style={{ marginTop: '10vh' }}></span>

                        <p className={gameLink} onClick={this.gameLaunch}>Launch Game</p>
                        <Link to="/game/instructions" className={gameLink}>Play Instructions</Link>
                        <Link to="/game/profile" className={gameLink}>Profile</Link>
                        {this.props.auth.email === 'none' &&
                            <Link to="/game/admin" className={gameLink}>Admin Dashboard</Link>
                        }
                    </div>

                    <div className={menuRight}>
                        <News />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, { authChecker })(Game)



const main = css`
    height: 93vh;
    width: 100vw;
    overflow-y: scroll;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('${bgImage}');
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
`
const menuLeft = css`
    grid-area: 1 / 1 / span 1 / span 1;
    height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
`
const menuRight = css`
    grid-area: 1 / 2 / span 1 / span 1;
    height: 93vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
`
const gameLink = css`
    color: blue;
    font-weight: bold;
    font-family: fantasy;
    font-size: 1.7em;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 5vh;
`