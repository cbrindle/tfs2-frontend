import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing';

//Desktop components
const Home = React.lazy(() => import('./Components/Home/Home'));
//

//Mobile components

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

                            <Route render={() => <h1 style={{ height: '84vh' }}>Component Not found</h1>} />
                        </Switch>
                    </>
                }
            </>
        )
    }
}
