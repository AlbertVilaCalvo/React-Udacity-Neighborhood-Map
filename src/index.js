import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const locations = [
  { name: 'Sagrada Família' },
  { name: 'Montserrat' },
  { name: 'Plaça Catalunya' },
];

ReactDOM.render(<App locations={locations} />, document.getElementById('root'));
registerServiceWorker();
