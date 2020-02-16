import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation logoTitle="NICOLAS WOITOWIEZ" />, document.getElementById('root'));
serviceWorker.unregister();
