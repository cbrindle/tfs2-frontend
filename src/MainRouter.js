import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';

//Desktop components lazy loading
const Signup = React.lazy(() => import('./Components/Signup/Signup'));
const About = React.lazy(() => import('./Components/About/About'));
const Contact = React.lazy(() => import('./Components/Contact/Contact'));
const Signin = React.lazy(() => import('./Components/Signin/Signin'));
const Game = React.lazy(() => import('./Components/Game/Game'));
const Instructions = React.lazy(() => import('./Components/Game/Instructions'));
const Profile = React.lazy(() => import('./Components/Game/Profile'));
//

//Mobile components lazy loading

//

export default class MainRouter extends Component {
    render() {
        return (
            <>
                {window.screen.orientation.type === 'landscape-primary' && window.screen.orientation.angle === 0 &&
                    <>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/signin" component={Signin} />
                            <Route exact path="/game" component={Game} />
                            <Route exact path="/game/instructions" component={Instructions} />
                            <Route exact path="/game/profile" component={Profile} />

                            <Route render={() => <h1 style={{ height: '84vh' }}>Component Not found</h1>} />
                        </Switch>
                    </>
                }

                {window.screen.orientation.type === 'landscape-primary' && window.screen.orientation.angle === 90 &&
                    <>
                        <Route render={() => <h1 style={{ height: '100vh' }}>Mobile components in production. Please check back later!</h1>} />
                    </>
                }
            </>
        )
    }
}
