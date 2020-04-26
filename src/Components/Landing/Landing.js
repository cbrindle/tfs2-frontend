import React, { Component } from 'react';
import { css } from 'emotion';
import bgImage from '../../images/new-title-img.jpg';
import logo from '../../images/logo.png';
import { connect } from 'react-redux';

class Landing extends Component {

    logoMove = () => {
        document.querySelector(`#tfs-logo`).classList.add('logoCenter');
        setTimeout(() => {
            this.props.history.push('/home');
        }, 3200);
    }

    render() {
        return (
            <div className={main}>
                <img id="tfs-logo" className={"gameLogo"} src={logo} onClick={this.logoMove} alt="TFS Logo" />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {})(Landing)

const main = css`
    height: 100vh;
    width: 100vw;
    background-image: url('${bgImage}');
    background-size: cover;
    background-position: center;
`