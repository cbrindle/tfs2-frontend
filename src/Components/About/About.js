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
                        <div className={contentTop}>
                            <h1>About</h1>
                        </div>
                        <div className={contentBottom}>
                            <p>Tales from Swiftfell started as a school project during my time at Code Immersives NYC. During our second term, we were given two weeks to create a full stack web app using EJS frontend framework, Express and Node on the backend, and MongoDB as the database. On top of creating the site, the game itself needed to be developed, tested, and deployed to a web server. Knowing the amount of work I had ahead of me, I started the project a week early. Some may call it cheating, I call it "unconventional motivation."</p>

                            <p>After many long nights and hard work, the project was complete. I was proud of my work, but given the short amount of time I had to develop it, I knew it wasn't as good as it could be. The opportunity for improvement came along near the end of my time in the Code Immersives program when we were learning about Amazon Web Services. We were tasked with deploying our final project, full stack app on AWS, taking us to our final step of the journey of starting with a blank file folder all the way to showing off our live websites.</p>

                            <p>It took me a little less than a week to get a version 1.0 build up on AWS and deployed to the world. My plan going forward is to use this site and application to continue to hone my skills as a developer. Who knows? Maybe I'll actually get around to making Chapter 2 of the game XD</p>
                        </div>
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
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 80%;
    overflow-y: scroll;
`
const contentTop = css`
    grid-area: 1 / 1 / span 1 / span 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: fantasy;
    font-size: 1.7em;
`
const contentBottom = css`
    grid-area: 2 / 1 / span 1 / span 1;
    font-family: fantasy;
    font-size 1.3em;
`