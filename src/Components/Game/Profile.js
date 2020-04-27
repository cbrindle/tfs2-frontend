import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/ledgerBG.jpg';

import { getProfile } from '../../redux/actions/authActions';

class Profile extends Component {

    state = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: 'XXXXXXXX'
    }

    homeRedirect = () => {
        this.props.history.push('/home');
    }

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        if (!auth) {
            this.props.history.push('/');
        }

        const data = await this.props.getProfile();
        this.setState({
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
        })
    }

    profileFade = () => {
        document.querySelector(`#bookRight`).classList.add('profileFadeOut');
        setTimeout(() => {
            document.querySelector(`#bookRight`).style.display = 'none';
        }, 1500);
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div id="book" className={bookLeft}>
                        <div className={leftTop}>
                            <h1 style={{ margin: '5vh 3vw 0 0' }}>{this.state.userName}</h1>
                        </div>
                        <div className={leftBottomLeft}>
                            <p>First Name:</p>
                            <p>Last Name:</p>
                            <p>Email:</p>
                            <p>Password:</p>
                        </div>
                        <div id="bookRight" className={leftBottomRight}>
                            <p>{this.state.firstName}</p>
                            <p>{this.state.lastName}</p>
                            <p>{this.state.email}</p>
                            <p>{this.state.password}</p>
                        </div>
                        <div className={buttonSection}>
                            <button id="updateButton" type="button" className={changeButton} onClick={this.profileFade}>Update Profile</button>
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

export default connect(mapStateToProps, { getProfile })(Profile)



const main = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${bgImage}');
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 15% 35% 50%;
    grid-template-rows: 5% 80% 15%;
`
const bookLeft = css`
    grid-area: 2 / 2 / span 1 / span 1;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 20% 65% 15%;
`
const leftTop = css`
    grid-area: 1 / 1 / span 1 / span 2;
    display: flex;
    justify-content: center;
    font-family: fantasy;
`
const leftBottomLeft = css`
    grid-area: 2 / 1 / span 1 / span 1;
    font-family: fantasy;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const leftBottomRight = css`
    grid-area: 2 / 2 / span 1 / span 1;
    font-family: fantasy;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const buttonSection = css`
    grid-area: 3 / 1 / span 1 / span 2;
    display: flex;
    justify-content: center;
`
const changeButton = css`
    height: 5vh;
    width: 10vw;
    border: 2px solid darkgreen;
    background-color: olivedrab;
    color: white;
    font-family: fantasy;
    border-radius: 5px;
    cursor: pointer;
`