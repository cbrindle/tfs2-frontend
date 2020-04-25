import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'emotion';
import Nav from '../Nav/Nav';
import mainBG from '../../images/ancient-bg.jpg';
import scroll from '../../images/scroll.png';

class Signup extends Component {
    render() {
        return (
            <>
                <Nav />

                <div className={main}>
                    <div className={centerSection}>
                        <div className={scrollInterior}>

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

export default connect(mapStateToProps, {})(Signup)



const main = css`
    height: 93vh;
    width: 100vw;
    background-image: url('${mainBG}');
    background-size: 100% 100%;
    display: grid;
    grid-template-rows: 3% 94% 3%;
    grid-template-columns: 25% 50% 25%;
`
const centerSection = css`
    grid-area: 2 / 2 / span 1 / span 1;
    background-image: url('${scroll}');
    background-size: 100% 120%;
    background-position: center;
`
const scrollInterior = css`
    border: 2px solid black;
    height: 75%;
    margin: 11% 19% 0 17%;
`