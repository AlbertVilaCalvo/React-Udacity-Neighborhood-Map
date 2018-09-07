import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const locations = [
  { name: 'Sagrada Família', lat: 41.403, lng: 2.171 },
  { name: 'Montserrat Abbey', lat: 41.591, lng: 1.834 },
  { name: 'Plaça Catalunya', lat: 41.387, lng: 2.167 },
  { name: 'Dalí Museum', lat: 42.268, lng: 2.956 },
  { name: 'Cadaqués', lat: 42.287, lng: 3.272 },
  { name: 'Banyoles', lat: 42.116, lng: 2.757 },
];

ReactDOM.render(<App locations={locations} />, document.getElementById('root'));
registerServiceWorker();
