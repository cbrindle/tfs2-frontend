import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import stageBG from '../../images/stageBG.jpg';

class Contact extends Component {

    homeRedirect = () => {
        this.props.history.push('/home');
    }
    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div className={contentMain}>
                        <h1>Contact Us</h1>
                        <p style={{ textAlign: 'center' }}>Thank you for visiting Tales from Swiftfell. We hoped you enjoyed playing our game. If you have any questions, comments, want to report a bug, tell me the app is trash, or just want to say hi, you can use the below resources.</p>
                        <br />

                        <a href="mailto:cbrindleusa@gmail.com?subject=TFS Email">Email</a>
                        <br />
                        <a href="http://linkedin.com/in/christopherbrindle" target="__blank">LinkedIn</a>
                        <br />
                        <a href="http://hirebrindle.com" target="__blank">Portfolio Site</a>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Contact)



const main = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${stageBG}');
    background-size: 100% 100%;
    display: grid;
    grid-template-rows: 20% 60% 20%;
    grid-template-columns: 30% 57% 13%;
`
const contentMain = css`
    grid-area: 2 / 2 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(225, 225, 225, 0.4);
    border-radius: 5px;
    font-family: fantasy;
    padding: 0 5% 0 5%;
`
const contentBottom = css`
    display: flex;
    justify-content: space-evenly;
`