import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/ledgerBG.jpg';

class Profile extends Component {

    homeRedirect = () => {
        this.props.history.push('/home');
    }

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        if (!auth) {
            this.props.history.push('/');
        }
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>

                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Profile)



const main = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${bgImage}');
    background-size: 100% 100%;
`