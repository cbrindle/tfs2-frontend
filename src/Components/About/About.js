import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

class About extends Component {

    homeRedirect = () => {
        this.props.history.push('/home');
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    About
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(About)



const main = css`
    height: 93vh;
    width: 100vw;
`