import React, { Component } from 'react';
import { css } from 'emotion';
import bgImage from '../../images/title-bg.jpg';
import titleText from '../../images/logo-text.png';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className={main}>
                <div className={leftSection}>
                    <Menu>
                        <p style={{ fontWeight: "bold" }}>Navigation Menu</p>
                        <hr />
                        <br />
                        <Link to="/home" className={menuLink}>Home</Link>
                        <br />
                        <Link to="/signup" className={menuLink}>Sign Up</Link>
                        <br />
                        <Link to="/about" className={menuLink}>About</Link>
                        <br />
                        <Link to="/contact" className={menuLink}>Contact Us</Link>
                    </Menu>
                </div>

                <div className={centerSection}>
                    <img src={titleText} className={titleTextStyle} alt="TFS Logo Text" />
                </div>

                <div className={rightSection}>

                </div>
            </div>
        )
    }
}

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
    align-items: center;
`
const rightSection = css`
    grid-area: 1 / 3 / span 1 / span 1;
    display: flex;
`
const titleTextStyle = css`
    height: 80%;
    width: 80%;
`
const menuLink = css`
    color: white;
    text-decoration: none;
    font-family: fantasy;
`