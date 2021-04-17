import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let time = 0;
setInterval(() => {
  time += 3;
  $('#main').html(`You've been on this page for ${time} seconds`);
}, 3000);
