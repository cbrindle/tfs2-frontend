import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/ledgerBG.jpg';

import { getProfile, updateProfile } from '../../redux/actions/authActions';

class Profile extends Component {

    state = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: 'XXXXXXXX',
        update: false
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
        this.setState({
            update: true
        })
        document.querySelector(`#bookRight`).classList.add('profileFadeOut');
        document.querySelector(`#bookRightInput`).style.display = 'inline';
        document.querySelector(`#bookRightInput`).classList.add('battleFadeIn');
        document.querySelector(`#changeButton`).style.display = 'inline';
        document.querySelector(`#updateButton`).style.display = 'none';
        document.querySelector(`#userSection`).style.display = 'none';
        document.querySelector(`#userSectionUpdate`).style.display = 'flex';
        document.querySelector(`#userSectionUpdate`).classList.add('battleFadeIn');
    }

    handleUpdate = async () => {
        if (document.querySelector(`#changeButton`).style.display !== 'none') {
            const data = {
                newUserName: document.querySelector(`#updateUserName`).value,
                newFirstName: document.querySelector(`#updateFirstName`).value,
                newLastName: document.querySelector(`#updateLastName`).value,
                newEmail: document.querySelector(`#updateEmail`).value,
                newPassword: document.querySelector(`#updatePassword`).value,
                email: this.state.email
            }
            try {
                const success = await this.props.updateProfile(data);
                this.setState({
                    userName: success.userName,
                    firstName: success.firstName,
                    lastName: success.lastName,
                    email: success.email,
                    update: false
                })
                document.querySelector(`#bookRight`).classList.remove('profileFadeOut');
                document.querySelector(`#bookRight`).classList.add('battleFadeIn');
                document.querySelector(`#bookRightInput`).classList.remove('battleFadeIn');
                document.querySelector(`#bookRightInput`).style.display = 'none';
                document.querySelector(`#changeButton`).style.display = 'none';
                document.querySelector(`#updateButton`).style.display = 'inline';
                document.querySelector(`#userSection`).style.display = 'flex';
                document.querySelector(`#userSection`).classList.add('battleFadeIn');
                document.querySelector(`#userSectionUpdate`).classList.remove('battleFadeIn');
                document.querySelector(`#userSectionUpdate`).classList.add('battleFadeOut');
                document.querySelector(`#userSectionUpdate`).style.display = 'none';

                document.querySelector(`#updateUserName`).value = '';
                document.querySelector(`#updateFirstName`).value = '';
                document.querySelector(`#updateLastName`).value = '';
                document.querySelector(`#updateEmail`).value = '';
                document.querySelector(`#updatePassword`).value = '';
            } catch (err) {
                console.log(err);
            }
        }
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div id="book" className={bookLeft}>
                        <div id="userSection" className={leftTop}>
                            <h1 style={{ margin: '5vh 3vw 0 0' }}>{this.state.userName}</h1>
                        </div>
                        <div id="userSectionUpdate" className={leftTop} style={{ display: 'none' }}>
                            <p><input id="updateUserName" className={inputUpdate} type="text" placeholder="User Name" style={{ marginTop: '3vh' }}></input></p>
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
                        <div id="bookRightInput" className={leftBottomRight} style={{ display: 'none' }}>
                            <p><input id="updateFirstName" className={inputUpdate} style={{ marginBottom: '3.3vh' }} type="text" placeholder="First Name"></input></p>
                            <p><input id="updateLastName" className={inputUpdate} style={{ marginBottom: '3.5vh' }} type="text" placeholder="Last Name"></input></p>
                            <p><input id="updateEmail" className={inputUpdate} style={{ marginBottom: '3.5vh' }} type="text" placeholder="Email Address"></input></p>
                            <p><input id="updatePassword" className={inputUpdate} type="password" placeholder="New Password"></input></p>
                        </div>
                        <div className={buttonSection}>
                            <button id="updateButton" type="button" className={changeButton} onClick={this.profileFade}>
                                Update Profile
                            </button>
                            <button id="changeButton" style={{ display: 'none' }} type="button" className={changeButton} onClick={this.handleUpdate}>
                                Submit Changes
                            </button>
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

export default connect(mapStateToProps, { getProfile, updateProfile })(Profile)



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
    text-algin: center;
`
const inputUpdate = css`
    height: 3vh;
    width: 15vw;
    border-radius: 5px;
    box-shadow: 2px 2px black;
`