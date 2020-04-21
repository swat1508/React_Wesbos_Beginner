import React from 'react';
import {render} from 'react-dom';
// import StorePicker from './StorePicker';
// import App from './components/App';
import Router from './components/Router';


//2 render(<p>Bye !!</p>, document.querySelector('#main')); //1
//3 render(<StorePicker /> , document.querySelector('#main')); //2
//4 render(<App /> , document.querySelector('#main')); //3
    render(<Router /> , document.querySelector('#main')); //4