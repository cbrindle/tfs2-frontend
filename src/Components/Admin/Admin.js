import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';

import { authChecker } from '../../redux/actions/authActions';

class Admin extends Component {

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        if (!auth) {
            this.props.history.push('/home');
        }
        await this.props.authChecker(auth);
        if (this.props.auth.email !== 'none') {
            this.props.history.push("/")
        }
    }

    getAllUsers = async () => {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    homeRedirect = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />
                <div className={main}>
                    <div className={adminLeft}>
                        <button type="button">Get All Users</button>
                    </div>
                    <div className={adminRight}>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})
export default connect(mapStateToProps, { authChecker })(Admin)


const main = css`
    height: 93vh;
    width: 100vw;
    overflow-y: scroll;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
`
const adminLeft = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const adminRight = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: grid;
    grid-template-rows: 20% 80%;
    columns: 100%;
`