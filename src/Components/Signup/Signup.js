import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import mainBG from '../../images/ancient-bg.jpg';
import scroll from '../../images/scroll.png';
import SignupInput from './Input';

import { signUp } from '../../redux/actions/authActions';

class Signup extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    <div className={centerSection}>
                        <div className={scrollInterior}>
                            <SignupInput
                                inputID="name"
                                inputName="name"
                                inputType="text"
                                inputPlaceholder="Name"
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

                            <button type="button" className={signupButton}>Sign Up</button>
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