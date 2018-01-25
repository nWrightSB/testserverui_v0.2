import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
