import React, { Component } from 'react';
import { css } from 'emotion';
import bgImage from '../../images/title-bg.jpg';
import titleText from '../../images/logo-text.png';

export default class Nav extends Component {
    render() {
        return (
            <div className={main}>
                <div className={leftSection}>

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