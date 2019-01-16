import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    // wrappin entire app in the context component 
<ProductProvider>
    // wrapping everything inside of the router so that we have all the routes available in our entire app.
    <Router>
        <App />
    </Router>
</ProductProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
