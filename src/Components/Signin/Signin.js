import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

class Signin extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    Sign In
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Signin)



const main = css`
    height: 93vh;
    width: 100vw;
`