import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './components/app/App';
import Analyze from './components/analyze/Analyze';
import Run from './components/run/Run';
import History from './components/history/History';
import Home from './components/home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/analyze" component={Analyze} />
            <Route path="/run" component={Run} />
            <Route path="/history" component={History} />
        </Route>
    </Router>
), document.getElementById('root'));

registerServiceWorker();
