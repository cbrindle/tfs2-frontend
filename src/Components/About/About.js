import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import bgImage from '../../images/parchment.jpg';

class About extends Component {

    homeRedirect = () => {
        this.props.history.push('/home');
    }


    render() {
        return (
            <>
                <Nav goHome={this.homeRedirect} />

                <div className={main}>
                    <div className={contentMain}>

                    </div>
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
    background-image: url('${bgImage}');
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 10% 55% 35%;
    grid-template-rows: 5% 90% 5%;
`
const contentMain = css`
    grid-area: 2 / 2 / span 1 / span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`