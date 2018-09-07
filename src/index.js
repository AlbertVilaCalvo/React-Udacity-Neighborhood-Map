import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const locations = [
  { name: 'Sagrada Família', lat: 41.403, lng: 2.171, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Sagrada_Família' },
  { name: 'Montserrat Abbey', lat: 41.591, lng: 1.834, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Santa_Maria_de_Montserrat_Abbey' },
  { name: 'Plaça de Catalunya', lat: 41.387, lng: 2.167, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Plaça_de_Catalunya' },
  { name: 'Dalí Museum', lat: 42.268, lng: 2.956, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Dalí_Museum' },
  { name: 'Cadaqués', lat: 42.287, lng: 3.272, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Cadaqués' },
  { name: 'Banyoles', lat: 42.116, lng: 2.757, wikipediaUrl: 'https://en.wikipedia.org/api/rest_v1/page/summary/Banyoles' },
];

ReactDOM.render(<App locations={locations} />, document.getElementById('root'));
registerServiceWorker();
