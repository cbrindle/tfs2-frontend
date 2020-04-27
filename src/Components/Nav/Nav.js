import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import bgImage from '../../images/title-bg.jpg';
import titleText from '../../images/logo-text.png';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import { authChecker, logout } from '../../redux/actions/authActions';

class Nav extends Component {

    async componentDidMount() {
        const auth = localStorage.getItem('jwt-user-token');
        await this.props.authChecker(auth);
    }

    handleLogout = async () => {
        await this.props.logout();
        this.props.goHome()
    }


    render() {
        return (
            <div className={main}>
                <div className={leftSection}>
                    <Menu>
                        <p style={{ fontWeight: "bold" }}>Navigation Menu</p>
                        <hr />
                        <br />
                        <Link to="/home" className={menuLink}>Home</Link>
                        {!this.props.auth.isAuth &&
                            <>
                                <Link to="/signin" className={menuLink}>Log In</Link>
                                <br /><br />
                                <Link to="/signup" className={menuLink}>Sign Up</Link>
                                <br /><br />
                            </>
                        }
                        <Link to="/about" className={menuLink}>About</Link>
                        <Link to="/contact" className={menuLink}>Contact Us</Link>
                        {this.props.auth.isAuth &&
                            <>
                                <hr />
                                <br />
                                <Link to="/game" className={menuLink}>Main Menu</Link>
                                <br /><br />
                                <Link to="/game/instructions" className={menuLink}>Game Instructions</Link>
                                <br /><br />
                                <Link to="/game/profile" className={menuLink}>Profile</Link>
                                <br /><br />

                                <hr />
                                <br />

                                <span className={menuLink} style={{ cursor: 'pointer' }} onClick={this.handleLogout}>Log Out</span>
                            </>
                        }
                    </Menu>
                </div>

                <div className={centerSection}>
                    <img src={titleText} className={titleTextStyle} alt="TFS Logo Text" />
                </div>

                <div className={rightSection}>
                    {this.props.auth.isAuth &&
                        <p style={{ marginRight: '3vw', color: '#2352d3' }}>Welcome home <span style={{ fontFamily: 'Times' }}>{this.props.auth.userName}</span></p>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, { authChecker, logout })(Nav)

const main = css`
    height: 7vh;
    width: 100vw;
    background-image: url('${bgImage}');
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-templates-rows: 100%;
`
const leftSection = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
`
const centerSection = css`
    grid-area: 1 / 2 / span 1 / span 1;
    display: flex;
    justify-content: center;
`
const rightSection = css`
    grid-area: 1 / 3 / span 1 / span 1;
    display: flex;
    justify-content: flex-end;
    font-family: fantasy;
    font-size: 1.1em;
`
const titleTextStyle = css`
    height: 70%;
    width: 80%;
`
const menuLink = css`
    color: white;
    text-decoration: none;
    font-family: fantasy;
    margin-bottom: 3vh;
`