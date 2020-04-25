import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

class Signup extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    Sign Up
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Signup)



const main = css`
    height: 93vh;
    width: 100vw;
`