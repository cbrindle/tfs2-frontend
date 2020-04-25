import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';

//Desktop components lazy loading
const Signup = React.lazy(() => import('./Components/Signup/Signup'));
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

                            <Route render={() => <h1 style={{ height: '84vh' }}>Component Not found</h1>} />
                        </Switch>
                    </>
                }
            </>
        )
    }
}
