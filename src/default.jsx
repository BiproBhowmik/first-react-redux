import React from "react";
import ClassComp from './components/classComp.js'
import inputTest from './components/inputTest.jsx'
import AxiousTest from './components/axiousTest.jsx'
import App from './App.js'
import hello from './components/hello.js'
import fcComp from './components/fcComp.js'
import './App.css';

import {
    BrowserRouter as Router, Switch,
    Route,
    Link
} from "react-router-dom";

export default class header extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/classComp">Class Component</Link>
                            </li>
                            <li>
                                <Link to="/inputTest">inputTest</Link>
                            </li>
                            <li>
                                <Link to="/axiousTest">Axious</Link>
                            </li>
                            <li>
                                <Link to="/hello">hello</Link>
                            </li>
                            <li>
                                <Link to="/fcComp">fcComp</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route exact path="/classComp" component={ClassComp} />
                            <Route exact path="/inputTest" component={inputTest} />
                            <Route exact path="/axiousTest" component={AxiousTest} />
                            <Route exact path="/hello" component={hello} />
                            <Route exact path="/fcComp" component={fcComp} />
                        </Switch>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/classComp">Class Component</Link>
                            </li>
                            <li>
                                <Link to="/inputTest">inputTest</Link>
                            </li>
                            <li>
                                <Link to="/axiousTest">Axious</Link>
                            </li>
                        </ul>
                    </header>
                </div>

            </Router>
        );
    }

}