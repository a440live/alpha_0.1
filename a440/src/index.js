import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

// Component imports:
import App from './App';
import Artist from './components/artists/Artist'
import Artists_list from "./components/artists/Artists_page";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path='/artists' component={Artists_list} />
            <Route path="/artists/riceuniversity" component={Artist} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
