import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import mainBG from '../../images/ancient-bg.jpg';
import scroll from '../../images/scroll.png';
import SignupInput from './Input';
import Notifications, { notify } from 'react-notify-toast';

import { signUp } from '../../redux/actions/authActions';

class Signup extends Component {

    handleSignUp = async () => {
        if (document.querySelector(`#firstName`).value === '') {
            notify.show("First Name field must be filled in", "error", 3000);
            return
        } else if (document.querySelector(`#lastName`).value === '') {
            notify.show("Last Name field must be filled in", "error", 3000);
            return
        } else if (document.querySelector(`#userName`).value === '') {
            notify.show("User Name field must be filled in", "error", 3000);
            return
        } else if (document.querySelector(`#email`).value === '') {
            notify.show("Email field must be filled in", "error", 3000);
            return
        } else if (!document.querySelector(`#email`).value.includes('@')) {
            notify.show("Please enter a valid email address", "error", 3000)
            return
        } else if (document.querySelector(`#password1`).value === '' || document.querySelector(`#password2`).value === '') {
            notify.show("Both password fields must be filled in", "error", 3000);
            return
        } else if (document.querySelector(`#password1`).value !== document.querySelector(`#password2`).value) {
            notify.show("Both passwords MUST match", 3000);
            return
        }

        const data = {
            firstName: document.querySelector(`#firstName`).value,
            lastName: document.querySelector(`#lastName`).value,
            userName: document.querySelector(`#userName`).value,
            email: document.querySelector(`#email`).value,
            password: document.querySelector(`#password1`).value
        }
        try {
            const success = await this.props.signUp(data);
            notify.show(`Account successfully created for ${success.newUser.userName}. Redirecting to Log In page...`, "success", 2000);
            setTimeout(() => {
                this.props.history.push('/signin');
            }, 2500);
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    <Notifications />

                    <div className={centerSection}>
                        <div className={scrollInterior}>
                            <SignupInput
                                inputID="firstName"
                                inputName="firstName"
                                inputType="text"
                                inputPlaceholder="First Name"
                            />

                            <SignupInput
                                inputID="lastName"
                                inputName="lastName"
                                inputType="text"
                                inputPlaceholder="Last Name"
                            />

                            <SignupInput
                                inputID="userName"
                                inputName="userName"
                                inputType="text"
                                inputPlaceholder="User Name"
                            />

                            <SignupInput
                                inputID="email"
                                inputName="email"
                                inputType="text"
                                inputPlaceholder="Email Address"
                            />

                            <SignupInput
                                inputID="password1"
                                inputName="password1"
                                inputType="password"
                                inputPlaceholder="Password"
                            />

                            <SignupInput
                                inputID="password2"
                                inputName="password2"
                                inputType="password"
                                inputPlaceholder="Confirm Password"
                            />

                            <button type="button" className={signupButton} onClick={this.handleSignUp}>Sign Up</button>
                            <br />
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

export default connect(mapStateToProps, { signUp })(Signup)



const main = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${mainBG}');
    background-size: 100% 100%;
    display: grid;
    grid-template-rows: 3% 94% 3%;
    grid-template-columns: 25% 50% 25%;
`
const centerSection = css`
    grid-area: 2 / 2 / span 1 / span 1;
    background-image: url('${scroll}');
    background-size: 100% 120%;
    background-position: center;
`
const scrollInterior = css`
    height: 75%;
    margin: 11% 19% 0 17%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`
const signupButton = css`
    border: 2px solid darkgreen;
    background-color: olivedrab;
    color: white;
    font-weight: bold;
    height: 7vh;
    width: 15vw;
    border-radius: 5px;
    font-family: fantasy;
    font-size: 1em;
    cursor: pointer;
    margin-top: 3vh;
    box-shadow: 3px 3px black;
`