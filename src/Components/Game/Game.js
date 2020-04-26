import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

import { authChecker } from '../../redux/actions/authActions';

class Game extends Component {

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        if (!auth) {
            this.props.history.push('/home');
        }
        await this.props.authChecker(auth);
    }

    homeRedirect = () => {
        this.props.history.push('/home');
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    Game
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, { authChecker })(Game)



const main = css`
    height: 93vh;
    width: 100vw;
`