import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

class Contact extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    Contact
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
`