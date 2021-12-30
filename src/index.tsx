import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, getSquarePositiveIntegers, sum, sumFirstNumbers} from "./lesson_8";
// sum(3, 5, 7, 6, 4, 9);
console.log(sumFirstNumbers(5));

ReactDOM.render(<App />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
